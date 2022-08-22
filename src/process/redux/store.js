import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import projectReducer from './projectSlice';
import transientReducer from './transientSlice';

const reducer = combineReducers({
  projects: projectReducer,
  user: userReducer,
  transient: transientReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'projects'],
  blacklist: ['transient'],
  timeout: null
};

const persistedReducer = persistReducer(persistConfig, reducer);

const logger = createLogger({ collapsed: true });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger)
});

export const persistedStore = persistStore(store);
