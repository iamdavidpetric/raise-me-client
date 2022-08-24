import { connect } from 'react-redux';

import Home from './view';

import {
  getFeaturedProject,
  getMostInvested,
  getQuickInfo
} from 'process/slices/projectSlice';

export default connect(
  state => ({
    quickInfo: state.projects.quickInfo,
    mostInvested: state.projects.mostInvested,
    featuredProject: state.projects.featuredProject
  }),
  {
    getFeaturedProject: getFeaturedProject,
    getMostInvested: getMostInvested,
    getQuickInfo: getQuickInfo
  }
)(Home);
