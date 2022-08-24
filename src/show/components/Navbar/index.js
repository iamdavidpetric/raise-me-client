import { connect } from 'react-redux';
import { signIn, signOut, signUp } from 'process/slices/userSlice';

import Navbar from './view';

export default connect(
  state => ({
    currentUser: state.user
  }),
  {
    signIn: signIn,
    signOut: signOut,
    signUp: signUp
  }
)(Navbar);
