import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import DescriptionStep from './view';

export default connect(
  state => ({
    description: state.transient.description
  }),
  {
    updateProps: updateProps
  }
)(DescriptionStep);
