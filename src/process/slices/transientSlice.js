import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const transientSlice = createSlice({
  name: 'transient',
  initialState,
  reducers: {
    updateProps: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetState: () => {
      return initialState;
    }
  }
});

export const { updateProps, resetState } = transientSlice.actions;

export default transientSlice.reducer;
