import { connect } from 'react-redux';

import { Creators as projectActions } from 'process/reducers/project';
import { Creators as transientActions } from 'process/reducers/transient';

import { featuredProject, mostInvested, quickInfo } from 'process/selectors';

import Home from './view';

export default connect(
  state => ({
    featuredProject: featuredProject(state),
    mostInvested: mostInvested(state),
    quickInfo: quickInfo(state)
  }),
  {
    getProject: projectActions.getProject,
    getQuickInfo: projectActions.getQuickInfo,
    getMostInvested: projectActions.getMostInvested,
    updateTransientProps: transientActions.updateProps,
    getFeaturedProject: projectActions.getFeaturedProject
  }
)(Home);
