import React from 'react';
// import {
//   CoreConfigContext,
//   CoreConfigContextValue,
// } from '@alfalab/core-components-config';
import Example from './Example';
// import List from './List';

export const App = () => {
  // const coreConfig = React.useMemo<CoreConfigContextValue>(
  //   () => ({ breakpoint: 600, client: 'mobile' }),
  //   [],
  // );

  return (
    // <CoreConfigContext.Provider value={coreConfig}>
    <Example />
    // </CoreConfigContext.Provider>
  );
};

