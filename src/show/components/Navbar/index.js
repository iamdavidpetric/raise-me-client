import { connect } from 'react-redux';

import { signIn, signOut, signUp } from 'process/slices/userSlice';
import { resetState, updateProps } from 'process/slices/transientSlice';

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
    updateProps: updateProps
  }
)(Navbar);
