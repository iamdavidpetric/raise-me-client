import storage from 'redux-persist/lib/storage';

const storeConfig = {
  key: 'root',
  storage,
  blacklist: ['transient'],
  timeout: null
};

export { storeConfig };
