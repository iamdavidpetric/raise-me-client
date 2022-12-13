import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import TeamMembersStep from './view';

export default connect(
  state => ({
    transient: state.transient
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(TeamMembersStep);
