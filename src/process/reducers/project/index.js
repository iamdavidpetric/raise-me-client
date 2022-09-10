import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    updateProps: ['props'],
    getFeaturedProject: null,
    getMostInvested: null,
    getQuickInfo: null,
    getProject: null
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

const updateProps = (state, { props }) => {
  return { ...state, ...props };
};

// const getProject = (state, { props }) => {
//   return { ...state, selectedProject: props };
// };

export default createReducer(initialState, {
  [Types.UPDATE_PROPS]: updateProps
});
