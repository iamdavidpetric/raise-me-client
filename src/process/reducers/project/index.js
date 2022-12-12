import { updateProps } from 'process/helpers';
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
    getFeaturedProject: null,
    getMyProjects: null,
    getMostInvested: null,
    getQuickInfo: null,
    getProject: ['payload']
  },
  { prefix: 'project/' }
);

const initialState = {
  featuredProject: {},
  mostInvested: [],
  projects: [],
  quickInfo: {},
  selectedProject: {}
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps
});
