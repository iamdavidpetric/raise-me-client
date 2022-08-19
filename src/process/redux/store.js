import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import projectReducer from './projectSlice';

const reducer = combineReducers({
  projects: projectReducer,
  user: userReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'projects'],
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
