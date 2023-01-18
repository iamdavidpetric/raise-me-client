import { connect } from 'react-redux';

import StudentIDStep from './view';

export default connect(
  state => ({
    name: state.transient.name
  }),
  {}
)(StudentIDStep);
