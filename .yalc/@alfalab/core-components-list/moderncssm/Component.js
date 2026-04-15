import React, { Children } from 'react';
import cn from 'classnames';
import { Item } from './components/item/Component.js';
import { ListContext } from './context.js';
import { isItem } from './utils.js';
import styles from './index.module.css';

const ListComponent = ({ tag = 'ul', marker, className, dataTestId, colorMarker, children, reversed, start, ...restProps }) => {
    const markerType = marker || (tag === 'ul' ? '–' : 'decimal');
    const alphaMarker = markerType === 'lower-alpha';
    const decimalMarker = markerType === 'decimal';
    const Component = tag === 'ul' || alphaMarker ? 'ul' : 'ol';
    const orderedList = Component === 'ol';
    const listClassNames = cn(styles.list, {
        [styles.lowerAlpha]: alphaMarker,
        [styles.decimal]: decimalMarker,
        [styles.reversed]: reversed,
    }, className);
    /* eslint-disable react/jsx-no-constructed-context-values */
    return (React.createElement(Component, { className: listClassNames, "data-test-id": dataTestId, ...restProps }, Children.map(children, (child, index) => (React.createElement(ListContext.Provider, { value: { orderedList, markerType, colorMarker, reversed, index, start } }, isItem(child) ? child : React.createElement(Item, null, child))))));
};
const List = Object.assign(ListComponent, {
    Item,
});

export { List, ListContext };
//# sourceMappingURL=Component.js.map
