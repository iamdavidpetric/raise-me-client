import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import StatementStep from './view';

export default connect(
  state => ({
    statement: state.transient.statement
  }),
  {
    updateProps: updateProps
  }
)(StatementStep);
