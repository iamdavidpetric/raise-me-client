import { connect } from 'react-redux';

import { Creators as growlActions } from 'process/reducers/growl';

import Navbar from './view';

export default connect(
  state => ({
    messages: state.growl.messages
  }),
  {
    popGrowls: growlActions.popGrowls
  }
)(Navbar);
