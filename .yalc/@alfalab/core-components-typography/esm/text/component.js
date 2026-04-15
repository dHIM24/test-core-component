import { __rest, __assign } from 'tslib';
import React, { forwardRef } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import { useSkeleton } from '@alfalab/core-components-skeleton/esm';
import colors from '../colors.module.css.js';
import styles from './index.module.css.js';

var Text = forwardRef(function (_a, ref) {
    var _b, _c;
    var _d = _a.view, view = _d === void 0 ? 'primary-medium' : _d, _e = _a.tag, Component = _e === void 0 ? 'span' : _e, weight = _a.weight, _f = _a.monospaceNumbers, monospaceNumbers = _f === void 0 ? false : _f, _g = _a.defaultMargins, defaultMargins = _g === void 0 ? true : _g, color = _a.color, className = _a.className, dataTestId = _a.dataTestId, children = _a.children, rowLimit = _a.rowLimit, showSkeleton = _a.showSkeleton, skeletonProps = _a.skeletonProps; _a.font; var restProps = __rest(_a, ["view", "tag", "weight", "monospaceNumbers", "defaultMargins", "color", "className", "dataTestId", "children", "rowLimit", "showSkeleton", "skeletonProps", "font"]);
    var _h = useSkeleton(showSkeleton, skeletonProps), renderSkeleton = _h.renderSkeleton, textRef = _h.textRef;
    var skeleton = renderSkeleton({
        wrapperClassName: cn((_b = {},
            _b[styles.paragraphWithMargins] = Component === 'p' && defaultMargins,
            _b)),
        dataTestId: dataTestId,
    });
    if (skeleton) {
        return skeleton;
    }
    return (React.createElement(Component, __assign({ className: cn((_c = {},
            _c[styles.paragraph] = Component === 'p' && !defaultMargins,
            _c[styles.paragraphWithMargins] = Component === 'p' && defaultMargins,
            _c[styles.monospace] = monospaceNumbers,
            _c[styles["rowLimit".concat(rowLimit)]] = rowLimit,
            _c[styles.transparent] = showSkeleton,
            _c), className, color && colors[color], styles[view], weight && styles[weight]), "data-test-id": dataTestId, ref: mergeRefs([ref, textRef]) }, restProps), children));
});

export { Text };
//# sourceMappingURL=component.js.map
