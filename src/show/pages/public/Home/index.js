import { connect } from 'react-redux';

import Home from './view';

import {
  getFeaturedProject,
  getMostInvested,
  getQuickInfo
} from 'process/slices/projectSlice';

export default connect(
  state => ({
    featuredProject: state.projects.featuredProject,
    mostInvested: state.projects.mostInvested,
    quickInfo: state.projects.quickInfo
  }),
  {
    getFeaturedProject: getFeaturedProject,
    getMostInvested: getMostInvested,
    getQuickInfo: getQuickInfo
  }
)(Home);
