import { updateProps } from 'process/helpers';
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    signIn: ['body'],
    signOut: null,
    signUp: ['body'],
    updateProps: ['props']
  },
  { prefix: 'user/' }
);

const initialState = { isLoggedIn: false };

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps
});
