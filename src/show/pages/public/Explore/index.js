import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';

import Explore from './view';

export default connect(
  state => ({
    searchResults: state.project.searchResults
  }),
  {
    searchProject: projectActions.searchProject
  }
)(Explore);
