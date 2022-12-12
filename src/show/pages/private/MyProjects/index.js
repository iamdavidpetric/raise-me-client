import { connect } from 'react-redux';

import { deleteProject } from 'process/slices/projectSlice';
import { Creators as projectActions } from 'process/reducers/project';

import MyProjects from './view';

export default connect(
  state => ({
    projects: state.project.projects
  }),
  {
    deleteProject: deleteProject,
    getMyProjects: projectActions.getMyProjects
  }
)(MyProjects);
