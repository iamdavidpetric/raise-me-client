import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import FeeStep from './view';

export default connect(
  state => ({
    fee: state.transient.fee
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(FeeStep);
