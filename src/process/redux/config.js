import storage from 'redux-persist/lib/storage';

const storeConfig = {
  key: 'root',
  storage,
  blacklist: ['transient', 'growl'],
  timeout: null
};

export { storeConfig };
