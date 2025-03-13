import React, { useState } from 'react';
import { PopupSheet as PopupSheetExample } from '@alfalab/core-components/popup-sheet';

export const PopupSheet = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (
        event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
        reason?: 'backdropClick' | 'escapeKeyDown' | 'closerClick' | 'swipe'
    ) => {
        setOpen(false);
        console.log('PopupSheet closed due to:', reason);
    };

    return (
        <div>
            <button onClick={handleOpen}>Open PopupSheet</button>

            <PopupSheetExample
                open={open}
                onClose={handleClose}
                hasCloser
                swipeable
                padding={0}
                dataTestId="popup-sheet-example"
            >
                {/* <div style={{ padding: '16px' }}>
                    <h3>PopupSheet Content</h3>
                    <p>This is an example content for the PopupSheet component.</p>
                </div> */}
                <img
                    src="https://alfabank.servicecdn.ru/site-upload/9b/fb/212/D_MainBan_558x456.png"
                    alt="Mock"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </PopupSheetExample>
        </div>
    );
};
