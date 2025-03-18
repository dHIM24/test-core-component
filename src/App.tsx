import React, { useState } from 'react';
import { AmountInput } from '@alfalab/core-components/amount-input';

// https://core-ds.github.io/core-components/master/?path=/docs/amountinput--docs
export const App = () => {
  const [amount, setAmount] = useState<number | null>(null);

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    payload: { value: number | null; valueString: string },
  ) => {
    setAmount(payload.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Тестирование компоненты AmountInput</h2>
      <AmountInput value={amount} onChange={handleAmountChange} currency='USD' dataTestId='amount-input' />
      <div style={{ marginTop: '10px' }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            input::selection,
            .with-suffix__suffix_1a863::selection {
                background: rgba(0, 120, 215, 0.3);
                color: inherit;
            }
          `,
          }}
        />
        Текущее значение: <strong>{amount !== null ? amount : 'не установлено'}</strong>
      </div>
    </div>
  );
};
