import React from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { CheckboxGroup } from '@alfalab/core-components/checkbox-group'
// import { CheckboxGroupDesktop } from '@alfalab/core-components/checkbox-group/desktop';
import { CheckboxGroupMobile } from '@alfalab/core-components/checkbox-group/mobile'
import { Tag } from '@alfalab/core-components/tag';

const SIZES = ['s', 'xs', 'xxs'];
type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 32 | 40 | 48 | 56 | 64 | 72;

export const CheckboxGroupForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      tags: Object.fromEntries(SIZES.map((size) => [size, false])),
    },
  });

  const onSubmit = (data: any) => {
    console.log('Форма отправлена:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <CheckboxGroupMobile label="Tags">
            {SIZES.map((size) => {
              const { ref, name, value, onChange, ...rest } = field;

              return (
                <div key={size} style={{ marginRight: 12 }}>
                  <Tag
                    {...rest} // Передаем оставшиеся пропсы
                    size={size as Size}
                    checked={field.value[size]}
                    onClick={() =>
                      field.onChange({
                        ...field.value,
                        [size]: !field.value[size],
                      })
                    }
                  >
                    Label
                  </Tag>
                </div>
              );
            })}
          </CheckboxGroupMobile>
        )}
      />
      <button type="submit">Отправить</button>
    </form>
  );
};
