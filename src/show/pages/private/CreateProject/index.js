import { connect } from 'react-redux';

import CreateProject from './view';

import { createProject } from 'process/slices/projectSlice';

export default connect(
  state => ({
    transient: state.transient
  }),
  {
    createProject: createProject
  }
)(CreateProject);
