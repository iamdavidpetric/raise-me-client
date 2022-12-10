import { connect } from 'react-redux';

import { signIn, signOut, signUp } from 'process/slices/userSlice';
import { resetState, updateProps } from 'process/slices/transientSlice';

import { Creators as applicationActions } from 'process/reducers/application';

import Navbar from './view';

export default connect(
  state => ({
    currentUser: state.user,
    transient: state.transient
  }),
  {
    resetState: resetState,
    signIn: signIn,
    signOut: signOut,
    signUp: signUp,
    // updateProps: updateProps
    updateprops: applicationActions.updateProps
  }
)(Navbar);
