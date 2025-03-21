import React, { useState, useRef } from 'react';
import styles from './index.css';
import { InputAutocompleteMobile } from '@alfalab/core-components/input-autocomplete/mobile';
import { Typography } from '@alfalab/core-components/typography';
import { Input } from '@alfalab/core-components/input';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

// Определяем опции как группу
const houseOptions = [
    {
      label: 'Доступные адреса',
      options: [
        { key: 'moscow-tverskaya-1', label: 'Москва, Тверская 1', value: 'Москва, Тверская 1' },
      ],
    },
  ];

type Props = {
  addressType: any;
  setStep: (step: any) => void;
  setError: (error: Error) => void;
  setConfirmationParams: (data: any) => void;
};

// Если имеется специальный тип причины ввода, можно задать его:
type OnInputTypeReason = any;

export const App: React.FC<Props> = ({
  addressType,
  setStep,
  setError,
  setConfirmationParams,
}) => {
  const title = addressType === 'Адрес регистрации';
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [flat, setFlat] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);

  const onOpen = () => setIsOpen(true);
  const onBlur = () => setIsOpen(false);

  // Используем приведение типа к any, чтобы иметь доступ к свойству value
  const handleChange = (payload: any) => {
    setQuery(payload.value);
  };

  // Функция для onInput согласно ожидаемой сигнатуре
  const onQueryChange = (value: string, reason?: OnInputTypeReason) => {
    setQuery(value);
  };

  const handleFlatInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFlat(event.target.value);
  const handleFlatInputClear = () => setFlat('');
  const onSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setConfirmationParams({ address: query, flat });
      setStep('nextStep');
    }, 1000); // Мокаем запрос
  };

  return (
    <React.Fragment>
      <div>
        <div className={styles.addressWrap}>
          <Typography.TitleResponsive
            tag="div"
            view="small"
            dataTestId="address-edit-title"
          >
            {title ? 'Адрес регистрации' : 'Другой адрес'}
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" dataTestId="address-edit-subtitle">
            В интернет-банке можно сохранить только российский адрес
          </Typography.Text>
        </div>
        <InputAutocompleteMobile
          dataTestId="address-edit-input-address"
          options={houseOptions}
          size="l"
          error={inputError}
          block={true}
          label="Город, улица, дом"
          closeOnSelect={false}
          optionsListWidth="field"
          showEmptyOptionsList={Boolean(query)}
          open={isOpen}
          onOpen={onOpen}
          value={query}
          onChange={handleChange}
          onInput={onQueryChange}
          placeholder="Введите адрес"
          inputProps={{
            ref: inputRef,
            placeholder: 'Введите адрес',
            dataTestId: 'address-edit-header-input',
            className: styles.headerAddonInput,
          }}
          optionsListProps={{
            footer: nullƒ∂
          }}
          transitionProps={{
            onEntered: () => {
              inputRef.current?.focus();
            },
            onExit: onBlur,
          }}
          onBlur={onBlur}
        />
        <Input
          dataTestId="address-edit-input-flat"
          value={flat}
          onChange={handleFlatInputChange}
          className={styles.flat}
          size="l"
          label="Квартира, если есть"
          block={true}
          clear={true}
          onClear={handleFlatInputClear}
        />
      </div>
      <div>
        <ButtonDesktop
          dataTestId="address-edit-button-submit"
          loading={submitting}
          view="primary"
          block={true}
          size="s"
          onClick={onSubmit}
        >
          Сменить адрес
        </ButtonDesktop>
      </div>
    </React.Fragment>
  );
};
