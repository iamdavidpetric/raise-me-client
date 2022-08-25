import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import GoalStep from './view';

export default connect(
  state => ({
    goal: state.transient.goal
  }),
  {
    updateProps: updateProps
  }
)(GoalStep);
