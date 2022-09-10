import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';
import { Creators as transientActions } from 'process/reducers/transient';

import Home from './view';

export default connect(
  state => ({
    featuredProject: state.project.featuredProject,
    mostInvested: state.project.mostInvested,
    quickInfo: state.project.quickInfo
  }),
  {
    getProject: projectActions.getProject,
    getQuickInfo: projectActions.getQuickInfo,
    getMostInvested: projectActions.getMostInvested,
    updateTransientProps: transientActions.updateProps,
    getFeaturedProject: projectActions.getFeaturedProject
  }
)(Home);
