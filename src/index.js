import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import Api from 'process/api';
import Application from './show/Application';
import { store as generateStore } from 'process/redux';

import './index.css';

const { store, persistor } = generateStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        onBeforeLift={() => {
          Api.setHeaders(store.getState().user.headers);
        }}
        persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
