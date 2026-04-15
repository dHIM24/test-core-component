import React, { forwardRef } from 'react';
import { TitleBase } from './component.js';
import styles from './index.module.css';

const Title = forwardRef((props, ref) => (React.createElement(TitleBase, { ...props, styles: styles, ref: ref, platform: 'desktop' })));

export { Title };
//# sourceMappingURL=index.js.map
