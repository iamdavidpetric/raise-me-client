import { connect } from 'react-redux';
import { getMyProjects, deleteProject } from 'process/slices/projectSlice';

import MyProjects from './view';

export default connect(
  state => ({
    projects: state.projects.projects
  }),
  {
    getMyProjects: getMyProjects,
    deleteProject: deleteProject
  }
)(MyProjects);
