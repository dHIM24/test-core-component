import { __assign } from 'tslib';
import React, { forwardRef } from 'react';
import { TitleBase } from '../title/component.js';
import styles from './index.module.css.js';

var TitleMobile = forwardRef(function (props, ref) { return React.createElement(TitleBase, __assign({}, props, { styles: styles, ref: ref, platform: 'mobile' })); });

export { TitleMobile };
//# sourceMappingURL=component.js.map
