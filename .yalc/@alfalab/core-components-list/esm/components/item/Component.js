import React, { useContext } from 'react';
import cn from 'classnames';
import { TypographyText } from '@alfalab/core-components-typography/esm';
import { ListContext } from '../../context.js';
import styles from './index.module.css.js';

var Item = function (_a) {
    var _b, _c;
    var caption = _a.caption, children = _a.children, className = _a.className, markerClassName = _a.markerClassName, dataTestId = _a.dataTestId;
    var _d = useContext(ListContext), orderedList = _d.orderedList, markerType = _d.markerType, colorMarker = _d.colorMarker, reversed = _d.reversed, _e = _d.index, index = _e === void 0 ? 0 : _e, _f = _d.start, start = _f === void 0 ? 0 : _f;
    var markerLowerAlpha = markerType === 'lower-alpha';
    var itemClassNames = cn(styles.item, className, (_b = {},
        _b[styles.unorderedItem] = markerLowerAlpha,
        _b[styles.reversed] = reversed,
        _b));
    var isDisc = markerType === '•';
    var count = start === 0 ? index + 1 : start + index;
    var marker = orderedList || markerType === 'decimal' ? "".concat(count, ".") : markerType;
    return (React.createElement("li", { className: cn(itemClassNames), "data-test-id": dataTestId },
        !markerLowerAlpha && (React.createElement(TypographyText, { tag: 'div', color: colorMarker, monospaceNumbers: true, view: 'primary-medium', className: cn(styles.slot, markerClassName, (_c = {},
                _c[styles.disc] = isDisc && !orderedList,
                _c[styles.defaultColor] = !colorMarker,
                _c)) }, marker)),
        React.createElement("div", null,
            React.createElement(TypographyText, { tag: 'div', view: 'primary-medium' }, children),
            caption && (React.createElement(TypographyText, { tag: 'div', view: 'primary-small', color: 'secondary', className: styles.caption }, caption)))));
};
Item.displayName = 'ListItem';

export { Item };
//# sourceMappingURL=Component.js.map
