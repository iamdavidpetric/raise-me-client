import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';

import EditProject from './view';

export default connect(
  state => ({
    selectedProject: state.projects.selectedProject,
    transient: state.transient
  }),
  {
    updateProps: updateProps
  }
)(EditProject);
