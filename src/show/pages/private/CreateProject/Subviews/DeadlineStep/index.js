import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import DeadlineStep from './view';

export default connect(
  state => ({
    deadline: state.transient.deadline
  }),
  {
    updateProps: updateProps
  }
)(DeadlineStep);
