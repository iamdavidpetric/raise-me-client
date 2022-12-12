import { connect } from 'react-redux';

import { updateProps } from 'process/slices/transientSlice';
import { editProject } from 'process/slices/projectSlice';

import EditProject from './view';

export default connect(
  state => ({
    selectedProject: state.projects.selectedProject,
    transient: state.transient
  }),
  {
    editProject: editProject,
    // getProject: getProject,
    updateProps: updateProps
  }
)(EditProject);
