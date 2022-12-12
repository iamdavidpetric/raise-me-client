import { updateProps } from 'process/helpers';
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    signIn: ['body'],
    signOut: null,
    signUp: ['body'],
    updateProps: ['props'],
    reset: null
  },
  { prefix: 'user/' }
);

const initialState = { isLoggedIn: false };

const reset = () => {
  return { ...initialState };
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.RESET]: reset
});
