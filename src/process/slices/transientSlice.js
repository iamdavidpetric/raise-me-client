import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const transientSlice = createSlice({
  name: 'transient',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    updateProps: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { resetState, updateProps } = transientSlice.actions;

export default transientSlice.reducer;
