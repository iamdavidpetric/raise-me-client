import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { storeConfig } from './config';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const loggerMiddleware = createLogger({
  collapsed: (_getState, _action, logEntry) => !logEntry.error,
  diff: true
});
const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];
middlewares.push(loggerMiddleware);

const enhancer = compose(...[], applyMiddleware(...middlewares));

const persistedReducer = persistReducer(storeConfig, rootReducer);
const store = legacy_createStore(persistedReducer, enhancer);
const persistor = persistStore(store, {}, () => {});

sagaMiddleware.run(sagas);
const reduxStore = () => ({ store, persistor });

export default reduxStore;

// import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';
// import { persistStore, persistReducer } from 'redux-persist';
// import { createStore, compose, applyMiddleware } from 'redux';

// import sagas from '../sagas';
// import { storeConfig } from './config';
// import rootReducer, { history } from './rootReducer';
// import apiMiddleware from './apiMiddleware';

// const loggerMiddleware = createLogger({
//   collapsed: (_getState, _action, logEntry) => !logEntry.error,
//   diff: true
// });

// // const sagaMiddleware = createSagaMiddleware();

// const middlewares = [apiMiddleware, sagaMiddleware, routerMiddleware(history)];

// if (process.env.REACT_APP_NODE_ENV !== 'production') {
//   middlewares.push(loggerMiddleware);
// }

// const enhancer = compose(applyMiddleware(...middlewares));

// const persistedReducer = persistReducer(storeConfig, rootReducer);
// const store = createStore(persistedReducer, enhancer);
// const persistor = persistStore(store, {});

// // sagaMiddleware.run(sagas);

// const reduxStore = () => ({ store, persistor });

// export default reduxStore;
