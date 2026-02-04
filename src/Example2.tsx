import React, { type FC, useCallback, useMemo, useRef, useState } from 'react';
import mergeRefs from 'react-merge-refs';
// import { InputAutocomplete } from '@alfalab/core-components-input-autocomplete'
import { InputAutocompleteDesktop } from '@alfalab/core-components-input-autocomplete/desktop';
import { InputAutocompleteMobile } from '@alfalab/core-components-input-autocomplete/mobile';
import { Textarea, type TextareaProps } from '@alfalab/core-components-textarea';
import { ClearButton } from '@alfalab/core-components-input/shared';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import {
  SearchProps,
  type BaseSelectChangePayload,
  type FieldProps,
  type OptionShape,
} from '@alfalab/core-components-select/shared';

const OPTIONS: OptionShape[] = [
  { key: '1', content: 'Москва' },
  { key: '2', content: 'Санкт-Петербург' },
  { key: '3', content: 'Казань' },
  { key: '4', content: 'Нижний Новгород' },
  { key: '5', content: 'Екатеринбург' },
  { key: '6', content: 'Новосибирск' },
  { key: '7', content: 'Самара' },
  { key: '8', content: 'Ростов-на-Дону' },
];

const getOptionText = (option?: OptionShape | null) =>
  option ? String(option.content ?? option.key) : '';

const CustomTextareaField = React.forwardRef<HTMLTextAreaElement, any>(
  (
    {
      value,
      onInput,
      inputProps,
      innerProps,
      clear,
      onClear,
      label,
      labelView = 'inner',
      size = 56,
      error,
      hint,
      disabled,
      readOnly,
      placeholder,
      onChange,
      open,
    },
    ref,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { onClick, onFocus, onBlur, ref: innerRef, ...restInnerProps } = innerProps ?? {};

    const showClear = Boolean(clear && value && !disabled && !readOnly);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        textareaRef.current?.focus();
        if (open) return;
        onClick?.(event as unknown as React.MouseEvent<HTMLDivElement | HTMLInputElement>);
      },
      [onClick, open, disabled],
    );

    const handleChange: TextareaProps['onChange'] = (event, payload) => {
      inputProps?.onChange?.(event, payload);
      onChange?.(event, payload);
      onInput?.(payload.value, 'change');
    };

    const rightAddonsContent =
      showClear && (
        <ClearButton onClick={onClear ?? (() => undefined)} disabled={disabled} colors='default' />
      );

    const textarea = (
      <Textarea
        {...inputProps}
        {...restInnerProps}
        ref={mergeRefs([textareaRef, ref])}
        wrapperRef={inputProps?.wrapperRef}
        block={true}
        label={label}
        labelView={labelView}
        size={size}
        error={error}
        hint={hint}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur as TextareaProps['onBlur']}
        onFocus={disabled ? undefined : (onFocus as TextareaProps['onFocus'])}
        rightAddons={rightAddonsContent}
      />
    );

    return (
      <div ref={innerRef} onClick={handleClick} style={{ width: '100%' }}>
        {textarea}
      </div>
    );
  },
);

const Field: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selected, setSelected] = useState<OptionShape | OptionShape[] | null>(null);

  const FieldComponent = CustomTextareaField as React.ComponentType<FieldProps>;
  const SearchComponent = CustomTextareaField as React.ComponentType<SearchProps>;

  const filteredOptions = useMemo(() => {
    const normalized = searchValue.trim().toLowerCase();

    if (!normalized) return OPTIONS;

    return OPTIONS.filter((option) =>
      getOptionText(option).toLowerCase().includes(normalized),
    );
  }, [searchValue]);

  const handleInput = useCallback(
    (value: string, reason?: 'close' | 'change') => {
      if (reason === 'close' && selected != null) return;
      setSearchValue(value);
    },
    [selected],
  );

  const handleChange = useCallback(
    (payload: BaseSelectChangePayload) => {

      setSelected(payload.selected);

      const nextValue = payload.selectedMultiple.map(getOptionText).filter(Boolean).join(', ')

      setSearchValue(nextValue);
    },
    [],
  );

  const handleClear = useCallback(() => {
    setSelected(null);
    setSearchValue('');
    handleInput('');
  }, [handleInput]);

  // todo: нужно чтобы был один компонент, а Desktop || Mobile раскручивался на уровне кастомного компонента
  // Например: FieldComponent или SearchComponent - отличные примеры
  return (
    <div style={{ display: 'grid', gap: 24, maxWidth: 520 }}>
      <div>
        <div style={{ marginBottom: 12, fontWeight: 600 }}>Desktop</div>
        <InputAutocompleteDesktop
          block={true}
          size={56}
          label='Город'
          labelView='outer'
          placeholder='Начните ввод'
          hint='Textarea как Field'
          options={filteredOptions}
          selected={selected}
          value={searchValue}
          clear={true}
          success={true}
          allowUnselect={true}
          closeOnSelect={true}
          Arrow={ChevronDownMIcon}
          Field={FieldComponent}
          onInput={handleInput}
          onChange={handleChange}
          onClear={handleClear}
        />
      </div>

      <div>
        <div style={{ marginBottom: 12, fontWeight: 600 }}>Mobile</div>
        <InputAutocompleteMobile
          block={true}
          size={56}
          label='Город'
          labelView='outer'
          placeholder='Выберите город'
          hint='Textarea как Field и Search'
          options={filteredOptions}
          selected={selected}
          value={searchValue}
          clear={true}
          allowUnselect={true}
          isBottomSheet={true}
          readOnly={true}
          Arrow={ChevronDownMIcon}
          Field={FieldComponent}
          Search={SearchComponent}
          onInput={handleInput}
          onChange={handleChange}
          onClear={handleClear}
        />
      </div>
    </div>
  );
};

export default Field;
