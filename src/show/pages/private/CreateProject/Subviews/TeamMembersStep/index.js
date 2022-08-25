import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import TeamMembersStep from './view';

export default connect(
  state => ({
    transient: state.transient
  }),
  {
    updateProps: updateProps
  }
)(TeamMembersStep);
