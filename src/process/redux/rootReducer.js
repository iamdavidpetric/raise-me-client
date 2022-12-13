import { createActions } from 'reduxsauce';
import { persistCombineReducers } from 'redux-persist';

import { storeConfig } from './config';
import { project, transient, user } from '../reducers';

export const { Types } = createActions(
  {
    reset: null
  },
  { prefix: 'state/' }
);

const appReducers = persistCombineReducers(storeConfig, {
  transient,
  user,
  project
});

const rootReducer = (state, action) => {
  if (action && action.type === 'state/RESET') {
    state = {
      transient: undefined,
      user: undefined,
      project: undefined
    };
  }

  return appReducers(state, action);
};

export default rootReducer;
