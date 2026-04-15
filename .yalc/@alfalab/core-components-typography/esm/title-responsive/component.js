import { __rest, __assign } from 'tslib';
import React, { forwardRef } from 'react';
import { useIsDesktop } from '@alfalab/core-components-mq/esm';
import { Title } from '../title/index.js';
import { TitleMobile } from '../title-mobile/component.js';

var TitleResponsive = forwardRef(function (_a, ref) {
    var breakpoint = _a.breakpoint, client = _a.client, restProps = __rest(_a, ["breakpoint", "client"]);
    var isDesktop = useIsDesktop(breakpoint, client === 'desktop');
    var Component = isDesktop ? Title : TitleMobile;
    return React.createElement(Component, __assign({}, restProps, { ref: ref }));
});

export { TitleResponsive };
//# sourceMappingURL=component.js.map
