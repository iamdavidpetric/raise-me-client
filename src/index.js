import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './process/redux/store';
import { Provider } from 'react-redux';

import './index.css';
import Application from './show/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
