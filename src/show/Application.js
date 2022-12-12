import { connect } from 'react-redux';

import Application from './view';

export default connect(state => ({
  currentUser: state.user
}))(Application);
