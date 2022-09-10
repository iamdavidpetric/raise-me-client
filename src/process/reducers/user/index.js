import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props']
  },
  { prefix: 'user/' }
);

const initialState = { isLoggedIn: false };

const updateProps = (state, { props }) => {
  return { ...state, ...props };
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps
});
