import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';
import { signIn, signOut, signUp } from 'process/slices/userSlice';

import Navbar from './view';

export default connect(
  state => ({
    currentUser: state.user,
    transient: state.transient
  }),
  {
    signIn: signIn,
    signOut: signOut,
    signUp: signUp,
    updateProps: updateProps
  }
)(Navbar);
