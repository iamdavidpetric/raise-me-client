import { connect } from 'react-redux';

import { deleteProject, getMyProjects } from 'process/slices/projectSlice';

import MyProjects from './view';

export default connect(
  state => ({
    projects: state.projects.projects
  }),
  {
    deleteProject: deleteProject,
    getMyProjects: getMyProjects
  }
)(MyProjects);
