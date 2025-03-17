import React, { useState, useRef } from 'react';
import { Button } from '@alfalab/core-components/button';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Radio } from '@alfalab/core-components/radio';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState('30000');
  const timeoutId = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleClick = () => {
    setLoading(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setLoading(false);
    }, Number(loadTimeout));
  };

  const handleTimeoutChange = (
    event: React.ChangeEvent<Element> | React.MouseEvent<Element, MouseEvent>,
    { value }: { value: string; name?: string },
  ) => {
    clearTimeout(timeoutId.current);
    setLoading(false);
    setLoadTimeout(value);
  };

  return (
    <div>
      <h2>Тестирование компоненты</h2>

      {/* При клике кнопка показывает спиннер (из core-components) */}
      <Button
        loading={loading}
        onClick={handleClick}
        dataTestId='123'>
        Отправить запрос
      </Button>

      <RadioGroup value={loadTimeout} onChange={handleTimeoutChange}>
        <Radio value='300' label='Быстрый запрос (300ms)' />
        <Radio value='15000' label='Долгий запрос (15000ms)' />
      </RadioGroup>
    </div>
  );
};
