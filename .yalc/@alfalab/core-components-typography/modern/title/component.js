import React, { forwardRef } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import { isObject } from '@alfalab/core-components-shared/modern';
import { useSkeleton } from '@alfalab/core-components-skeleton/modern';
import { getDefaultWeight } from './utils.js';
import colors from '../colors.module.css.js';
import commonStyles from './common.module.css.js';

const TitleBase = forwardRef(({ tag: Component = 'div', view = 'medium', font = 'styrene', platform, weight = getDefaultWeight(isObject(font) ? font.font : font, platform), defaultMargins = false, color, className, dataTestId, children, rowLimit, styles, skeletonProps, showSkeleton, ...restProps }, ref) => {
    const { renderSkeleton, textRef } = useSkeleton(showSkeleton, skeletonProps);
    const skeleton = renderSkeleton({
        wrapperClassName: cn(defaultMargins && styles[`margins-${view}`]),
        dataTestId,
    });
    if (skeleton) {
        return skeleton;
    }
    return (React.createElement(Component, { className: cn(commonStyles.component, styles.component, className, styles[`${weight === 'regular' ? 'regular-' : ''}${view}`], defaultMargins && styles[`margins-${view}`], color && colors[color], {
            [commonStyles[`rowLimit${rowLimit}`]]: rowLimit,
            [commonStyles.transparent]: showSkeleton,
            [styles.font]: (isObject(font) && !font.systemCompat) || !(font === 'system'),
        }), "data-test-id": dataTestId, ref: mergeRefs([ref, textRef]), ...restProps }, children));
});

export { TitleBase };
//# sourceMappingURL=component.js.map
