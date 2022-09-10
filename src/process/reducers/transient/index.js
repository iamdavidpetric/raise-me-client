import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    reset: null,
    updateProps: ['props']
  },
  { prefix: 'transient/' }
);

const initialState = {};

const updateProps = (state, { props }) => {
  return { ...state, ...props };
};
const reset = () => {
  return { ...initialState };
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.RESET]: reset
});
