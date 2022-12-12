import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';
import { Creators as userActions } from 'process/reducers/user';

import Navbar from './view';

export default connect(
  state => ({
    currentUser: state.user,
    transient: state.transient
  }),
  {
    resetState: transientActions.reset,
    signIn: userActions.signIn,
    signOut: userActions.signOut,
    signUp: userActions.signUp,
    updateTransientProps: transientActions.updateProps
  }
)(Navbar);
