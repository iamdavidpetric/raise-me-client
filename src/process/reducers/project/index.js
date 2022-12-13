import { createActions, createReducer } from 'reduxsauce';

import { updateProps } from 'process/helpers';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
    getFeaturedProject: null,
    getMyProjects: null,
    getMostInvested: null,
    getQuickInfo: null,
    getProject: ['payload'],
    createProject: ['project'],
    editProject: ['project'],
    deleteProject: ['payload'],
    searchProject: ['search', 'selectedCategory']
  },
  { prefix: 'project/' }
);

const initialState = {
  featuredProject: {},
  mostInvested: [],
  projects: [],
  project: {},
  quickInfo: {},
  selectedProject: {},
  searchResults: []
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps
});
