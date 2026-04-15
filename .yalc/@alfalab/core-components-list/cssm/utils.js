'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var isItemElement = function (obj, name) {
    return typeof obj === 'object' && obj.type.displayName === name;
};
var isItem = function (child) {
    return React.isValidElement(child) && isItemElement(child, 'ListItem');
};

exports.isItem = isItem;
exports.isItemElement = isItemElement;
//# sourceMappingURL=utils.js.map
