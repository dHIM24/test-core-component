'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var cn = require('classnames');
var coreComponentsTypography = require('@alfalab/core-components-typography');
var context = require('../../context.js');
var index_module = require('./index.module.css.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var cn__default = /*#__PURE__*/_interopDefaultCompat(cn);

var Item = function (_a) {
    var _b, _c;
    var caption = _a.caption, children = _a.children, className = _a.className, markerClassName = _a.markerClassName, dataTestId = _a.dataTestId;
    var _d = React.useContext(context.ListContext), orderedList = _d.orderedList, markerType = _d.markerType, colorMarker = _d.colorMarker, reversed = _d.reversed, _e = _d.index, index = _e === void 0 ? 0 : _e, _f = _d.start, start = _f === void 0 ? 0 : _f;
    var markerLowerAlpha = markerType === 'lower-alpha';
    var itemClassNames = cn__default.default(index_module.item, className, (_b = {},
        _b[index_module.unorderedItem] = markerLowerAlpha,
        _b[index_module.reversed] = reversed,
        _b));
    var isDisc = markerType === '•';
    var count = start === 0 ? index + 1 : start + index;
    var marker = orderedList || markerType === 'decimal' ? "".concat(count, ".") : markerType;
    return (React__default.default.createElement("li", { className: cn__default.default(itemClassNames), "data-test-id": dataTestId },
        !markerLowerAlpha && (React__default.default.createElement(coreComponentsTypography.TypographyText, { tag: 'div', color: colorMarker, monospaceNumbers: true, view: 'primary-medium', className: cn__default.default(index_module.slot, markerClassName, (_c = {},
                _c[index_module.disc] = isDisc && !orderedList,
                _c[index_module.defaultColor] = !colorMarker,
                _c)) }, marker)),
        React__default.default.createElement("div", null,
            React__default.default.createElement(coreComponentsTypography.TypographyText, { tag: 'div', view: 'primary-medium' }, children),
            caption && (React__default.default.createElement(coreComponentsTypography.TypographyText, { tag: 'div', view: 'primary-small', color: 'secondary', className: index_module.caption }, caption)))));
};
Item.displayName = 'ListItem';

exports.Item = Item;
//# sourceMappingURL=Component.js.map
