import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';
import { Creators as transientActions } from 'process/reducers/transient';

import EditProject from './view';

export default connect(
  state => ({
    selectedProject: state.project.selectedProject,
    transient: state.transient
  }),
  {
    getProject: projectActions.getProject,
    editProject: projectActions.editProject,
    updateTransientProps: transientActions.updateProps
  }
)(EditProject);
