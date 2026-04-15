import React, { FC } from 'react';
import { ButtonMobile } from '@alfalab/core-components-button/mobile'
import { BottomSheet } from '@alfalab/core-components-bottom-sheet';

const VARIANTS = {
  EXTRA_AREA: 'extra_area',
};

const BUTTONS = ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'];
const VARIANT_PROPS_MAP = {
  // [VARIANTS.EXTRA_AREA]: { magneticAreas: [0, 100, '50%', -100] },
  [VARIANTS.EXTRA_AREA]: { magneticAreas: [88, 144, 224, -100] },
};

const Example: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const fullHeightRef = React.useRef<number | null>(null);

  const [activeAreaIdx, setActiveAreaIdx] = React.useState(0);

  const bottomSheetRef = React.useRef<{ scrollToArea: (idx: number) => void }>(null);

  const variantProps = VARIANT_PROPS_MAP[VARIANTS.EXTRA_AREA];
  const scrollLocked = activeAreaIdx !== variantProps.magneticAreas.length - 1;
  const isNotLastAreaWithExtTrigger = open && scrollLocked;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAreaChange = (idx: number) => setActiveAreaIdx(idx);


  const magnetizeToLastArea = () =>
    bottomSheetRef.current?.scrollToArea(variantProps.magneticAreas.length - 1);

  return (
    <div>
      <ButtonMobile
        view={isNotLastAreaWithExtTrigger ? 'accent' : 'secondary'}
        size={48}
        onClick={open ? magnetizeToLastArea : handleOpen}
        block={true}
      >
        Открыть шторку
      </ButtonMobile>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: height - 32,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: 8 }}>
          {BUTTONS.map((button) => (
            <div
              key={button}
              style={{
                padding: '6px 12px',
                borderRadius: 999,
                background: '#eef2ff',
                color: '#2b2d33',
                border: '1px solid #d5daf0',
                fontSize: 14,
              }}
            >
              {button}
            </div>
          ))}
        </div>
      </div>
      <BottomSheet
        trimTitle={false}
        open={open}
        onClose={handleClose}
        title='Title'
        bottomSheetInstanceRef={bottomSheetRef}
        key={VARIANTS.EXTRA_AREA}
        hideScrollbar={true}
        onMagnetize={handleAreaChange}
        initialActiveAreaIndex={0}
        onOffsetChange={(offset, percent) => {
          if (percent > 0 && fullHeightRef.current === null) {
            fullHeightRef.current = offset / (percent / 100);
          }

          const baseHeight = fullHeightRef.current;

          if (baseHeight == null) return;

          setHeight(Math.max(baseHeight - offset, 0));
        }}
        {...variantProps}
      >
        <div style={{ display: 'flex', flexFlow: 'column', gap: 16 }}>
          content
        </div>
      </BottomSheet>
    </div>
  );
}

export default Example;

