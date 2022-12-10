import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';

import Explore from './view';

export default connect(
  state => ({
    selectedProject: state.project.selectedProject
  }),
  {
    getProject: projectActions.getProject
  }
)(Explore);
