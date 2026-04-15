'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var cn = require('classnames');
var Component = require('./components/item/Component.js');
var context = require('./context.js');
var utils = require('./utils.js');
var index_module = require('./index.module.css.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var cn__default = /*#__PURE__*/_interopDefaultCompat(cn);

var ListComponent = function (_a) {
    var _b;
    var _c = _a.tag, tag = _c === void 0 ? 'ul' : _c, marker = _a.marker, className = _a.className, dataTestId = _a.dataTestId, colorMarker = _a.colorMarker, children = _a.children, reversed = _a.reversed, start = _a.start, restProps = tslib.__rest(_a, ["tag", "marker", "className", "dataTestId", "colorMarker", "children", "reversed", "start"]);
    var markerType = marker || (tag === 'ul' ? '–' : 'decimal');
    var alphaMarker = markerType === 'lower-alpha';
    var decimalMarker = markerType === 'decimal';
    var Component$1 = tag === 'ul' || alphaMarker ? 'ul' : 'ol';
    var orderedList = Component$1 === 'ol';
    var listClassNames = cn__default.default(index_module.list, (_b = {},
        _b[index_module.lowerAlpha] = alphaMarker,
        _b[index_module.decimal] = decimalMarker,
        _b[index_module.reversed] = reversed,
        _b), className);
    /* eslint-disable react/jsx-no-constructed-context-values */
    return (React__default.default.createElement(Component$1, tslib.__assign({ className: listClassNames, "data-test-id": dataTestId }, restProps), React.Children.map(children, function (child, index) { return (React__default.default.createElement(context.ListContext.Provider, { value: { orderedList: orderedList, markerType: markerType, colorMarker: colorMarker, reversed: reversed, index: index, start: start } }, utils.isItem(child) ? child : React__default.default.createElement(Component.Item, null, child))); })));
};
var List = Object.assign(ListComponent, {
    Item: Component.Item,
});

exports.ListContext = context.ListContext;
exports.List = List;
//# sourceMappingURL=Component.js.map
