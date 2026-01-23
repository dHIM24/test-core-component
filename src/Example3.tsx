import React, { type FC } from 'react';
import { SelectDesktop } from '@alfalab/core-components-select/desktop';
import { BaseOption } from '@alfalab/core-components-select/components';

type Option = {
  key: string;
  content: string;
};

const OPTIONS: Option[] = Array.from({ length: 80 }, (_, i) => ({
  key: String(i + 1),
  content: `Элемент ${i + 1}`,
}));

const HEADER_HEIGHT = 56;

const Example3: FC = () => {
  /**
   * Репро:
   * - preventFlip=true (дефолт) => поповер не флипается и может выйти за viewport
   * - браузер добавляет scroll overflow у html/body => "белая полоса", sticky-логика выглядит сломанной
   */
  const [allowFlip, setAllowFlip] = React.useState(false);
  const [limitHeightToViewport, setLimitHeightToViewport] = React.useState(false);

  return (
    <div style={{ paddingTop: HEADER_HEIGHT }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '0 16px',
          background: '#ffffff',
          borderBottom: '1px solid #e6e6e6',
          zIndex: 10,
        }}>
        <div style={{ fontWeight: 600 }}>Хедер {HEADER_HEIGHT}px</div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type='checkbox' checked={allowFlip} onChange={(e) => setAllowFlip(e.target.checked)} />
          allowFlip (фикс)
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            type='checkbox'
            checked={limitHeightToViewport}
            onChange={(e) => setLimitHeightToViewport(e.target.checked)}
          />
          popoverProps.availableHeight (фикс)
        </label>
      </div>

      <div style={{ minHeight: '180vh', padding: 16, background: '#f6f7f8' }}>
        <div style={{ height: '120vh' }} />

        <div style={{ width: 320, padding: 16, background: '#fff', border: '1px solid #eee' }}>
          <SelectDesktop
            allowUnselect={true}
            size={56}
            options={OPTIONS}
            placeholder='Выберите элемент'
            label='Одиночный выбор'
            Option={BaseOption}
            block={true}
            /**
             * Делаем меню достаточно высоким, чтобы внизу страницы был overflow.
             */
            visibleOptions={12}
            /**
             * Важно: preventFlip=true (дефолт) и есть триггер бага.
             */
            preventFlip={!allowFlip}
            popoverProps={
              limitHeightToViewport
                ? {
                    /**
                     * Включает max-height по доступной высоте (через popper-max-size-modifier).
                     * Это убирает "вылаз" меню за viewport и, как следствие, лишний скролл html/body.
                     */
                    availableHeight: true,
                  }
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Example3;
