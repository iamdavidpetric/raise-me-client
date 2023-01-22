import { connect } from 'react-redux';

import { Creators as growlActions } from 'process/reducers/growl';
import { Creators as projectActions } from 'process/reducers/project';
import { Creators as transientActions } from 'process/reducers/transient';

import Project from './view';

export default connect(
  state => ({
    selectedProject: state.project.selectedProject
  }),
  {
    getProject: projectActions.getProject,
    createGrowls: growlActions.createGrowls,
    updateTransientProps: transientActions.updateProps
  }
)(Project);
