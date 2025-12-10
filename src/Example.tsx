import React, { FC } from 'react';
import { ButtonMobile } from '@alfalab/core-components-button/mobile'
import { BottomSheet } from '@alfalab/core-components-bottom-sheet';

const VARIANTS = {
  EXTRA_AREA: 'extra_area',
};

const VARIANT_PROPS_MAP = {
  [VARIANTS.EXTRA_AREA]: { magneticAreas: [0, 100, '50%', -100] },
  // [VARIANTS.EXTRA_AREA]: { magneticAreas: [88, 144, 224] },
};

const Example: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
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

      <div style={{ bottom: height, position: 'absolute' }}>CHIPS</div>
      <BottomSheet
        trimTitle={false}
        open={open}
        onClose={handleClose}
        title='Title'
        bottomSheetInstanceRef={bottomSheetRef}
        key={VARIANTS.EXTRA_AREA}
        // scrollLocked={scrollLocked}
        hideScrollbar={true}
        onMagnetize={handleAreaChange}
        onOffsetChange={(offset) => {
          setHeight(224 - offset + 16)
        }}
        {...variantProps}
      //  {...(!isNotLastAreaWithExtTrigger ? { hideOverlay: false } : null)}
      >
        <div style={{ display: 'flex', flexFlow: 'column', gap: 16 }}>
          content
        </div>
      </BottomSheet>
    </div>
  );
}

export default Example;

