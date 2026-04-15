import { __rest, __assign } from 'tslib';
import React, { forwardRef } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import { isObject } from '@alfalab/core-components-shared/esm';
import { useSkeleton } from '@alfalab/core-components-skeleton/esm';
import { getDefaultWeight } from './utils.js';
import colors from '../colors.module.css.js';
import commonStyles from './common.module.css.js';

var TitleBase = forwardRef(function (_a, ref) {
    var _b;
    var _c = _a.tag, Component = _c === void 0 ? 'div' : _c, _d = _a.view, view = _d === void 0 ? 'medium' : _d, _e = _a.font, font = _e === void 0 ? 'styrene' : _e, platform = _a.platform, _f = _a.weight, weight = _f === void 0 ? getDefaultWeight(isObject(font) ? font.font : font, platform) : _f, _g = _a.defaultMargins, defaultMargins = _g === void 0 ? false : _g, color = _a.color, className = _a.className, dataTestId = _a.dataTestId, children = _a.children, rowLimit = _a.rowLimit, styles = _a.styles, skeletonProps = _a.skeletonProps, showSkeleton = _a.showSkeleton, restProps = __rest(_a, ["tag", "view", "font", "platform", "weight", "defaultMargins", "color", "className", "dataTestId", "children", "rowLimit", "styles", "skeletonProps", "showSkeleton"]);
    var _h = useSkeleton(showSkeleton, skeletonProps), renderSkeleton = _h.renderSkeleton, textRef = _h.textRef;
    var skeleton = renderSkeleton({
        wrapperClassName: cn(defaultMargins && styles["margins-".concat(view)]),
        dataTestId: dataTestId,
    });
    if (skeleton) {
        return skeleton;
    }
    return (React.createElement(Component, __assign({ className: cn(commonStyles.component, styles.component, className, styles["".concat(weight === 'regular' ? 'regular-' : '').concat(view)], defaultMargins && styles["margins-".concat(view)], color && colors[color], (_b = {},
            _b[commonStyles["rowLimit".concat(rowLimit)]] = rowLimit,
            _b[commonStyles.transparent] = showSkeleton,
            _b[styles.font] = (isObject(font) && !font.systemCompat) || !(font === 'system'),
            _b)), "data-test-id": dataTestId, ref: mergeRefs([ref, textRef]) }, restProps), children));
});

export { TitleBase };
//# sourceMappingURL=component.js.map
