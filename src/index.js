import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Application from './show/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
