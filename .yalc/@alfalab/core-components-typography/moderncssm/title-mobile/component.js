import React, { forwardRef } from 'react';
import { TitleBase } from '../title/component.js';
import styles from './index.module.css';

const TitleMobile = forwardRef((props, ref) => React.createElement(TitleBase, { ...props, styles: styles, ref: ref, platform: 'mobile' }));

export { TitleMobile };
//# sourceMappingURL=component.js.map
