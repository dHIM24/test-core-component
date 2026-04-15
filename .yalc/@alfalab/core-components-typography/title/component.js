'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var mergeRefs = require('react-merge-refs');
var cn = require('classnames');
var coreComponentsShared = require('@alfalab/core-components-shared');
var coreComponentsSkeleton = require('@alfalab/core-components-skeleton');
var utils = require('./utils.js');
var colors_module = require('../colors.module.css.js');
var common_module = require('./common.module.css.js');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var mergeRefs__default = /*#__PURE__*/_interopDefaultCompat(mergeRefs);
var cn__default = /*#__PURE__*/_interopDefaultCompat(cn);

var TitleBase = React.forwardRef(function (_a, ref) {
    var _b;
    var _c = _a.tag, Component = _c === void 0 ? 'div' : _c, _d = _a.view, view = _d === void 0 ? 'medium' : _d, _e = _a.font, font = _e === void 0 ? 'styrene' : _e, platform = _a.platform, _f = _a.weight, weight = _f === void 0 ? utils.getDefaultWeight(coreComponentsShared.isObject(font) ? font.font : font, platform) : _f, _g = _a.defaultMargins, defaultMargins = _g === void 0 ? false : _g, color = _a.color, className = _a.className, dataTestId = _a.dataTestId, children = _a.children, rowLimit = _a.rowLimit, styles = _a.styles, skeletonProps = _a.skeletonProps, showSkeleton = _a.showSkeleton, restProps = tslib.__rest(_a, ["tag", "view", "font", "platform", "weight", "defaultMargins", "color", "className", "dataTestId", "children", "rowLimit", "styles", "skeletonProps", "showSkeleton"]);
    var _h = coreComponentsSkeleton.useSkeleton(showSkeleton, skeletonProps), renderSkeleton = _h.renderSkeleton, textRef = _h.textRef;
    var skeleton = renderSkeleton({
        wrapperClassName: cn__default.default(defaultMargins && styles["margins-".concat(view)]),
        dataTestId: dataTestId,
    });
    if (skeleton) {
        return skeleton;
    }
    return (React__default.default.createElement(Component, tslib.__assign({ className: cn__default.default(common_module.component, styles.component, className, styles["".concat(weight === 'regular' ? 'regular-' : '').concat(view)], defaultMargins && styles["margins-".concat(view)], color && colors_module[color], (_b = {},
            _b[common_module["rowLimit".concat(rowLimit)]] = rowLimit,
            _b[common_module.transparent] = showSkeleton,
            _b[styles.font] = (coreComponentsShared.isObject(font) && !font.systemCompat) || !(font === 'system'),
            _b)), "data-test-id": dataTestId, ref: mergeRefs__default.default([ref, textRef]) }, restProps), children));
});

exports.TitleBase = TitleBase;
//# sourceMappingURL=component.js.map
