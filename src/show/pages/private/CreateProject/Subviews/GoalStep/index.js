import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import GoalStep from './view';

export default connect(
  state => ({
    goal: state.transient.goal
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(GoalStep);
