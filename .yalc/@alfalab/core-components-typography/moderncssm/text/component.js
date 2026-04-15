import React, { forwardRef } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import { useSkeleton } from '@alfalab/core-components-skeleton/moderncssm';
import colors from '../colors.module.css';
import styles from './index.module.css';

const Text = forwardRef(({ view = 'primary-medium', tag: Component = 'span', weight, monospaceNumbers = false, defaultMargins = true, color, className, dataTestId, children, rowLimit, showSkeleton, skeletonProps, font, ...restProps }, ref) => {
    const { renderSkeleton, textRef } = useSkeleton(showSkeleton, skeletonProps);
    const skeleton = renderSkeleton({
        wrapperClassName: cn({
            [styles.paragraphWithMargins]: Component === 'p' && defaultMargins,
        }),
        dataTestId,
    });
    if (skeleton) {
        return skeleton;
    }
    return (React.createElement(Component, { className: cn({
            [styles.paragraph]: Component === 'p' && !defaultMargins,
            [styles.paragraphWithMargins]: Component === 'p' && defaultMargins,
            [styles.monospace]: monospaceNumbers,
            [styles[`rowLimit${rowLimit}`]]: rowLimit,
            [styles.transparent]: showSkeleton,
        }, className, color && colors[color], styles[view], weight && styles[weight]), "data-test-id": dataTestId, ref: mergeRefs([ref, textRef]), ...restProps }, children));
});

export { Text };
//# sourceMappingURL=component.js.map
