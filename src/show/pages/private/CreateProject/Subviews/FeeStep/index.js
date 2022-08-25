import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import FeeStep from './view';

export default connect(
  state => ({
    fee: state.transient.fee
  }),
  {
    updateProps: updateProps
  }
)(FeeStep);
