import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import TitleStep from './view';

export default connect(
  state => ({
    name: state.transient.name
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(TitleStep);
