import React, { useContext } from 'react';
import cn from 'classnames';
import { TypographyText } from '@alfalab/core-components-typography/modern';
import { ListContext } from '../../context.js';
import styles from './index.module.css.js';

const Item = ({ caption, children, className, markerClassName, dataTestId, }) => {
    const { orderedList, markerType, colorMarker, reversed, index = 0, start = 0, } = useContext(ListContext);
    const markerLowerAlpha = markerType === 'lower-alpha';
    const itemClassNames = cn(styles.item, className, {
        [styles.unorderedItem]: markerLowerAlpha,
        [styles.reversed]: reversed,
    });
    const isDisc = markerType === '•';
    const count = start === 0 ? index + 1 : start + index;
    const marker = orderedList || markerType === 'decimal' ? `${count}.` : markerType;
    return (React.createElement("li", { className: cn(itemClassNames), "data-test-id": dataTestId },
        !markerLowerAlpha && (React.createElement(TypographyText, { tag: 'div', color: colorMarker, monospaceNumbers: true, view: 'primary-medium', className: cn(styles.slot, markerClassName, {
                [styles.disc]: isDisc && !orderedList,
                [styles.defaultColor]: !colorMarker,
            }) }, marker)),
        React.createElement("div", null,
            React.createElement(TypographyText, { tag: 'div', view: 'primary-medium' }, children),
            caption && (React.createElement(TypographyText, { tag: 'div', view: 'primary-small', color: 'secondary', className: styles.caption }, caption)))));
};
Item.displayName = 'ListItem';

export { Item };
//# sourceMappingURL=Component.js.map
