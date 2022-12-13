import { connect } from 'react-redux';

import { Creators as transientActions } from 'process/reducers/transient';

import CategoryStep from './view';

export default connect(state => ({}), {
  updateTransientProps: transientActions.updateProps
})(CategoryStep);
