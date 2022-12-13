import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import DescriptionStep from './view';

export default connect(
  state => ({
    description: state.transient.description
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(DescriptionStep);
