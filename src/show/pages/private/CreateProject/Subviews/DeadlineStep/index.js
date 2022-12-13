import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import DeadlineStep from './view';

export default connect(
  state => ({
    deadline: state.transient.deadline
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(DeadlineStep);
