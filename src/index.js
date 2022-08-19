import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import Api from 'process/api';
import Application from './show/Application';
import { persistedStore, store } from 'process/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        onBeforeLift={() => Api.setHeaders(store.getState().user.headers)}
        persistor={persistedStore}>
        <Application />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
