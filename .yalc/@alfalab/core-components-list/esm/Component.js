import { __rest, __assign } from 'tslib';
import React, { Children } from 'react';
import cn from 'classnames';
import { Item } from './components/item/Component.js';
import { ListContext } from './context.js';
import { isItem } from './utils.js';
import styles from './index.module.css.js';

var ListComponent = function (_a) {
    var _b;
    var _c = _a.tag, tag = _c === void 0 ? 'ul' : _c, marker = _a.marker, className = _a.className, dataTestId = _a.dataTestId, colorMarker = _a.colorMarker, children = _a.children, reversed = _a.reversed, start = _a.start, restProps = __rest(_a, ["tag", "marker", "className", "dataTestId", "colorMarker", "children", "reversed", "start"]);
    var markerType = marker || (tag === 'ul' ? '–' : 'decimal');
    var alphaMarker = markerType === 'lower-alpha';
    var decimalMarker = markerType === 'decimal';
    var Component = tag === 'ul' || alphaMarker ? 'ul' : 'ol';
    var orderedList = Component === 'ol';
    var listClassNames = cn(styles.list, (_b = {},
        _b[styles.lowerAlpha] = alphaMarker,
        _b[styles.decimal] = decimalMarker,
        _b[styles.reversed] = reversed,
        _b), className);
    /* eslint-disable react/jsx-no-constructed-context-values */
    return (React.createElement(Component, __assign({ className: listClassNames, "data-test-id": dataTestId }, restProps), Children.map(children, function (child, index) { return (React.createElement(ListContext.Provider, { value: { orderedList: orderedList, markerType: markerType, colorMarker: colorMarker, reversed: reversed, index: index, start: start } }, isItem(child) ? child : React.createElement(Item, null, child))); })));
};
var List = Object.assign(ListComponent, {
    Item: Item,
});

export { List, ListContext };
//# sourceMappingURL=Component.js.map
