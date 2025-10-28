import React, { FC, useRef, useState } from 'react';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';

const VARIANTS = {
  EXTRA_AREA: 'extra_area',
};

const VARIANT_PROPS_MAP = {
  [VARIANTS.EXTRA_AREA]: { magneticAreas: [0, '50%', -1], initialActiveAreaIndex: 1 },
};

const LongContent = () => (
  <div style={{ padding: '24px 16px 16px', height: '100%', overflowY: 'auto' }}>
    <Typography.Text>
      Это длинный контент для демонстрации скролла в BottomSheet с ограниченной высотой.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <br />
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <br />
      <br />
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      <br />
      <br />
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animi, id est laborum.
      <br />
      <br />
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
      <br />
      <br />
      Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo.
      <br />
      <br />
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt.
      <br />
      <br />
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
      <br />
      <br />
      Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      <br />
      <br />
      Ut enim ad minima veniam, quis nostrud exercitationem ullam corporis suscipit laboriosam.
    </Typography.Text>
  </div>
);

const Example: FC = () => {
  const [checked] = useState(VARIANTS.EXTRA_AREA);
  const [open, setOpen] = useState(false);
  const [activeAreaIdx, setActiveAreaIdx] = useState(0);
  const bottomSheetRef = useRef<{ scrollToArea: (index: number) => void } | null>(null);

  const variantProps = VARIANT_PROPS_MAP[checked];
  const lastIdx = variantProps.magneticAreas.length - 1;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAreaChange = (idx: number) => setActiveAreaIdx(idx);

  // todo: 50% соответствует 50% magneticAreas
  const containerHeight = activeAreaIdx === lastIdx ? '100%' : '50%';

  return (
      <div>
          <ButtonMobile size='s' onClick={handleOpen} block>
              Показать шторку
          </ButtonMobile>

          <BottomSheet
              bottomSheetInstanceRef={bottomSheetRef}
              open={open}
              onClose={handleClose}
              onMagnetize={handleAreaChange}
              key={checked}
              {...variantProps}
              containerProps={{ style: { height: containerHeight } }}
              scrollLocked={false}
              hideScrollbar={false}
          >
              <LongContent />
          </BottomSheet>
      </div>
  );
};


export default Example;
