import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import TitleStep from './view';

export default connect(
  state => ({
    name: state.transient.name
  }),
  {
    updateProps: updateProps
  }
)(TitleStep);
