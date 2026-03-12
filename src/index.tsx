import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import { CoreConfigProvider } from './CoreConfigProvider';
import { View } from './view';

const container = document.getElementById('root') || document.getElementById('react-app');

if (!container) {
  throw new Error(
    '#react-app контейнер не найден. Проверь шаблон HtmlWebpackPlugin или overrides.',
  );
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    {/* <CoreConfigProvider> */}
      <View />
    {/* </CoreConfigProvider> */}
  </React.StrictMode>,
);

reportWebVitals();
