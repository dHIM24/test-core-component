'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var mergeRefs = require('react-merge-refs');
var cn = require('classnames');
var coreComponentsSkeleton = require('@alfalab/core-components-skeleton');
var colors_module = require('../colors.module.css.js');
var index_module = require('./index.module.css.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var mergeRefs__default = /*#__PURE__*/_interopDefaultCompat(mergeRefs);
var cn__default = /*#__PURE__*/_interopDefaultCompat(cn);

var Text = React.forwardRef(function (_a, ref) {
    var _b, _c;
    var _d = _a.view, view = _d === void 0 ? 'primary-medium' : _d, _e = _a.tag, Component = _e === void 0 ? 'span' : _e, weight = _a.weight, _f = _a.monospaceNumbers, monospaceNumbers = _f === void 0 ? false : _f, _g = _a.defaultMargins, defaultMargins = _g === void 0 ? true : _g, color = _a.color, className = _a.className, dataTestId = _a.dataTestId, children = _a.children, rowLimit = _a.rowLimit, showSkeleton = _a.showSkeleton, skeletonProps = _a.skeletonProps; _a.font; var restProps = tslib.__rest(_a, ["view", "tag", "weight", "monospaceNumbers", "defaultMargins", "color", "className", "dataTestId", "children", "rowLimit", "showSkeleton", "skeletonProps", "font"]);
    var _h = coreComponentsSkeleton.useSkeleton(showSkeleton, skeletonProps), renderSkeleton = _h.renderSkeleton, textRef = _h.textRef;
    var skeleton = renderSkeleton({
        wrapperClassName: cn__default.default((_b = {},
            _b[index_module.paragraphWithMargins] = Component === 'p' && defaultMargins,
            _b)),
        dataTestId: dataTestId,
    });
    if (skeleton) {
        return skeleton;
    }
    return (React__default.default.createElement(Component, tslib.__assign({ className: cn__default.default((_c = {},
            _c[index_module.paragraph] = Component === 'p' && !defaultMargins,
            _c[index_module.paragraphWithMargins] = Component === 'p' && defaultMargins,
            _c[index_module.monospace] = monospaceNumbers,
            _c[index_module["rowLimit".concat(rowLimit)]] = rowLimit,
            _c[index_module.transparent] = showSkeleton,
            _c), className, color && colors_module[color], index_module[view], weight && index_module[weight]), "data-test-id": dataTestId, ref: mergeRefs__default.default([ref, textRef]) }, restProps), children));
});

exports.Text = Text;
//# sourceMappingURL=component.js.map
