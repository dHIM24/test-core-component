import { isValidElement } from 'react';

var isItemElement = function (obj, name) {
    return typeof obj === 'object' && obj.type.displayName === name;
};
var isItem = function (child) {
    return isValidElement(child) && isItemElement(child, 'ListItem');
};

export { isItem, isItemElement };
//# sourceMappingURL=utils.js.map
