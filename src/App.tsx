import React from 'react';
// import {
//   CoreConfigContext,
//   CoreConfigContextValue,
// } from '@alfalab/core-components-config';
import Field from './Example2';
// import List from './List';

export const App = () => {
  // const coreConfig = React.useMemo<CoreConfigContextValue>(
  //   () => ({ breakpoint: 600, client: 'mobile' }),
  //   [],
  // );

  return (
    // <CoreConfigContext.Provider value={coreConfig}>
    <Field />
    // </CoreConfigContext.Provider>
  );
};

