'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var cssm = require('@alfalab/core-components-mq/cssm');
var index = require('../title/index.js');
var component = require('../title-mobile/component.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);

var TitleResponsive = React.forwardRef(function (_a, ref) {
    var breakpoint = _a.breakpoint, client = _a.client, restProps = tslib.__rest(_a, ["breakpoint", "client"]);
    var isDesktop = cssm.useIsDesktop(breakpoint, client === 'desktop');
    var Component = isDesktop ? index.Title : component.TitleMobile;
    return React__default.default.createElement(Component, tslib.__assign({}, restProps, { ref: ref }));
});

exports.TitleResponsive = TitleResponsive;
//# sourceMappingURL=component.js.map
