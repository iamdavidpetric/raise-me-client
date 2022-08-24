import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import CategoryStep from './view';

export default connect(state => ({}), {
  updateProps: updateProps
})(CategoryStep);
