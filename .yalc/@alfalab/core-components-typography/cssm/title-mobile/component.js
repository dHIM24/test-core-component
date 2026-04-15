'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var component = require('../title/component.js');
var styles = require('./index.module.css');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var styles__default = /*#__PURE__*/_interopDefaultCompat(styles);

var TitleMobile = React.forwardRef(function (props, ref) { return React__default.default.createElement(component.TitleBase, tslib.__assign({}, props, { styles: styles__default.default, ref: ref, platform: 'mobile' })); });

exports.TitleMobile = TitleMobile;
//# sourceMappingURL=component.js.map
