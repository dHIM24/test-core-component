import React, { forwardRef } from 'react';
import { useIsDesktop } from '@alfalab/core-components-mq/moderncssm';
import { Title } from '../title/index.js';
import { TitleMobile } from '../title-mobile/component.js';

const TitleResponsive = forwardRef(({ breakpoint, client, ...restProps }, ref) => {
    const isDesktop = useIsDesktop(breakpoint, client === 'desktop');
    const Component = isDesktop ? Title : TitleMobile;
    return React.createElement(Component, { ...restProps, ref: ref });
});

export { TitleResponsive };
//# sourceMappingURL=component.js.map
