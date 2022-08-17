import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from '../api';

export const signIn = createAsyncThunk('user/signIn', async payload => {
  try {
    const resp = await Api.post(`/auth/sign_in/`, payload);
    return { ...resp.data.data, headers: resp.headers };
  } catch (err) {
    return err.response.data;
  }
});

export const signOut = createAsyncThunk('user/signOut', async payload => {
  try {
    await Api.delete(`/auth/sign_out`);
    return { payload };
  } catch (err) {
    return err.message;
  }
});

export const signUp = createAsyncThunk('user/signUp', async payload => {
  try {
    const resp = await Api.post(`/auth`, payload);
    return { ...resp.data.data, headers: resp.headers };
  } catch (err) {
    return err.response.data;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {},

  reducers: {},

  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      Api.setHeaders(payload.headers);
      return { ...payload, isLoggedIn: true };
    },

    [signUp.fulfilled]: (state, { payload }) => {
      Api.setHeaders(payload.headers);
      return { ...payload };
    },

    [signOut.fulfilled]: (state, { payload }) => {
      return { isLoggedIn: false };
    }
  }
});

export const { setSelectedProject } = userSlice.actions;

export default userSlice.reducer;
