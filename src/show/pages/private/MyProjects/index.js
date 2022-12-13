import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';

import MyProjects from './view';

export default connect(
  state => ({
    projects: state.project.projects
  }),
  {
    deleteProject: projectActions.deleteProject,
    getMyProjects: projectActions.getMyProjects
  }
)(MyProjects);
