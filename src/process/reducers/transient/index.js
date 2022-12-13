import { createActions, createReducer } from 'reduxsauce';

import { updateProps } from 'process/helpers';

export const { Types, Creators } = createActions(
  {
    reset: null,
    updateProps: ['props']
  },
  { prefix: 'transient/' }
);

const initialState = {};

const reset = () => {
  return { ...initialState };
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.RESET]: reset
});
