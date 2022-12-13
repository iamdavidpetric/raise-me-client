import { connect } from 'react-redux';

import { Creators as userActions } from 'process/reducers/user';
import { Creators as transientActions } from 'process/reducers/transient';

import Navbar from './view';

export default connect(
  state => ({
    currentUser: state.user,
    transient: state.transient
  }),
  {
    signIn: userActions.signIn,
    signUp: userActions.signUp,
    signOut: userActions.signOut,
    resetState: transientActions.reset,
    updateTransientProps: transientActions.updateProps
  }
)(Navbar);
