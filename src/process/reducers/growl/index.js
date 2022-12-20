import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    createGrowls: ['growls'],
    pushGrowls: ['props'],
    popGrowls: ['props']
  },
  { prefix: 'growl/' }
);

const initialState = { messages: [] };

const pushGrowls = (state, { props }) => {
  return {
    ...state,
    messages: [...state.messages, ...props]
  };
};

const popGrowls = (state, { props }) => {
  const newMessages = [...state.messages];
  const last = newMessages.filter(growl => !props?.find(({ id }) => growl.id === id));

  return { ...state, messages: [...last] };
};

export default createReducer(initialState, {
  [Types.PUSH_GROWLS]: pushGrowls,
  [Types.POP_GROWLS]: popGrowls
});
