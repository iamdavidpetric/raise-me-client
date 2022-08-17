import { createLogger } from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import projectReducer from './projectSlice';

const logger = createLogger({
  collapsed: true
});

const reducer = combineReducers({
  projects: projectReducer,
  user: userReducer
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
