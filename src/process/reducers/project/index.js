import { updateProps } from 'process/helpers';
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
    getFeaturedProject: null,
    getMostInvested: null,
    getQuickInfo: null,
    getProject: ['id']
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

const getProject = (state, { payload }) => {
  return { ...state, selectedProject: payload };
};

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps,
  [Types.GET_PROJECT]: getProject
});
