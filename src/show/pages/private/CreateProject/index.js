import { connect } from 'react-redux';

import CreateProject from './view';

import { Creators as projectActions } from 'process/reducers/project';

export default connect(
  state => ({
    transient: state.transient
  }),
  {
    createProject: projectActions.createProject
  }
)(CreateProject);
