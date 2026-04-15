'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cn = require('classnames');
var cssm = require('@alfalab/core-components-typography/cssm');
var context = require('../../context.js');
var styles = require('./index.module.css');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var cn__default = /*#__PURE__*/_interopDefaultCompat(cn);
var styles__default = /*#__PURE__*/_interopDefaultCompat(styles);

var Item = function (_a) {
    var _b, _c;
    var caption = _a.caption, children = _a.children, className = _a.className, markerClassName = _a.markerClassName, dataTestId = _a.dataTestId;
    var _d = React.useContext(context.ListContext), orderedList = _d.orderedList, markerType = _d.markerType, colorMarker = _d.colorMarker, reversed = _d.reversed, _e = _d.index, index = _e === void 0 ? 0 : _e, _f = _d.start, start = _f === void 0 ? 0 : _f;
    var markerLowerAlpha = markerType === 'lower-alpha';
    var itemClassNames = cn__default.default(styles__default.default.item, className, (_b = {},
        _b[styles__default.default.unorderedItem] = markerLowerAlpha,
        _b[styles__default.default.reversed] = reversed,
        _b));
    var isDisc = markerType === '•';
    var count = start === 0 ? index + 1 : start + index;
    var marker = orderedList || markerType === 'decimal' ? "".concat(count, ".") : markerType;
    return (React__default.default.createElement("li", { className: cn__default.default(itemClassNames), "data-test-id": dataTestId },
        !markerLowerAlpha && (React__default.default.createElement(cssm.TypographyText, { tag: 'div', color: colorMarker, monospaceNumbers: true, view: 'primary-medium', className: cn__default.default(styles__default.default.slot, markerClassName, (_c = {},
                _c[styles__default.default.disc] = isDisc && !orderedList,
                _c[styles__default.default.defaultColor] = !colorMarker,
                _c)) }, marker)),
        React__default.default.createElement("div", null,
            React__default.default.createElement(cssm.TypographyText, { tag: 'div', view: 'primary-medium' }, children),
            caption && (React__default.default.createElement(cssm.TypographyText, { tag: 'div', view: 'primary-small', color: 'secondary', className: styles__default.default.caption }, caption)))));
};
Item.displayName = 'ListItem';

exports.Item = Item;
//# sourceMappingURL=Component.js.map
