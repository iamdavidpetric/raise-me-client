import { createActions } from 'reduxsauce';
import { persistCombineReducers } from 'redux-persist';

import { storeConfig } from './config';
import { growl, project, transient, user } from '../reducers';

export const { Types } = createActions(
  {
    reset: null
  },
  { prefix: 'state/' }
);

const appReducers = persistCombineReducers(storeConfig, {
  growl,
  project,
  transient,
  user
});

const rootReducer = (state, action) => {
  if (action && action.type === 'state/RESET') {
    state = {
      growl: undefined,
      project: undefined,
      transient: undefined,
      user: undefined
    };
  }

  return appReducers(state, action);
};

export default rootReducer;
