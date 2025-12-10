import React, { FC } from 'react';
import { Button } from '@alfalab/core-components-button'
import { ButtonMobile } from '@alfalab/core-components-button/mobile'
import { BottomSheet } from '@alfalab/core-components-bottom-sheet';
import { Input } from '@alfalab/core-components-input';

const Example2: FC = () => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <ButtonMobile type='button' size={48} onClick={handleOpen} block={true}>
                Показать анатомию
            </ButtonMobile>
            
            <BottomSheet
                open={open}
                iOSLock={true}
                virtualKeyboard={true}
                stickyFooter={true}
                stickyHeader={true}
                title='Заголовок stickyHeader'
                disableBlockingScroll={true}
                actionButton={
                    <Button>stickyFooter button</Button>
                }
                onClose={handleClose}
                // disableBlockingScroll={true}
            >
                <Input
                    label='Тестовый инпут'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Введите текст'
                />
            </BottomSheet>
        </div>
    );
}

export default Example2;
