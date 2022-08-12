import { createLogger } from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import projectReducer from './projectSlice';

const logger = createLogger({
  collapsed: true
});

const reducer = combineReducers({
  projects: projectReducer
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
