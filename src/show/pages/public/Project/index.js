import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';
import { Creators as transientActions } from 'process/reducers/transient';

import Project from './view';

export default connect(
  state => ({
    selectedProject: state.project.selectedProject
  }),
  {
    getProject: projectActions.getProject,
    updateTransientProps: transientActions.updateProps
    // getProject: getProject
    // getProject: projectActions.updateProps,
    // getFeaturedProject: projectActions.getFeaturedProject
  }
)(Project);
