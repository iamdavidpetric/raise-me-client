import projectReducer from './projectSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    projects: projectReducer
  }
});
