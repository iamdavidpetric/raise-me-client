import { connect } from 'react-redux';
import { getProject } from 'process/slices/projectSlice';

import Project from './view';

export default connect(
  state => ({
    selectedProject: state.projects.selectedProject
  }),
  {
    getProject: getProject
  }
)(Project);
