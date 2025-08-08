import React, { useState, useRef } from 'react';
import { Input } from '@alfalab/core-components/input';
// import { Icon } from '@alfalab/core-components/icon-view';

export const App = () => {
    const css = `
        button[data-test-id='icon'] {
            margin-right: var(--gap-12-neg);
        }
    `;

    return (
        <div style={{ width: 320 }}>
            <style>{css}</style>
            <Input
                block={true}
                // label={'Инпут с плейсхолдером'}
                // placeholder={'Placeholder'}
                size={56}
                leftAddons={<div>123</div>}
                clear={true}
                // breakpoint={BREAKPOINT}
                hint='Подсказка под полем'
            />
        </div>
    );
};
