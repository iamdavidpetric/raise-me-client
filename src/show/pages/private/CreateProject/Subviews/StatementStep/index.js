import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import StatementStep from './view';

export default connect(
  state => ({
    statement: state.transient.statement
  }),
  {
    updateTransientProps: transientActions.updateProps
  }
)(StatementStep);
