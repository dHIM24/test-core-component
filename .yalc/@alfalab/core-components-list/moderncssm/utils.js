import { isValidElement } from 'react';

const isItemElement = (obj, name) => typeof obj === 'object' && obj.type.displayName === name;
const isItem = (child) => isValidElement(child) && isItemElement(child, 'ListItem');

export { isItem, isItemElement };
//# sourceMappingURL=utils.js.map
