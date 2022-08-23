import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from '../api';

export const getProject = createAsyncThunk('projects/getProject', async payload => {
  try {
    const response = await Api.get(`/projects/${payload.id}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const getMyProjects = createAsyncThunk('projects/getMyProjects', async () => {
  try {
    const response = await Api.get(`/projects/my_projects/`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const getFeaturedProject = createAsyncThunk(
  'projects/getFeaturedProject',
  async () => {
    try {
      const response = await Api.get(`/todays_project/null`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getMostInvested = createAsyncThunk('projects/getMostInvested', async () => {
  try {
    const response = await Api.get(`/todays_project/`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const getQuickInfo = createAsyncThunk('projects/getQuickInfo', async () => {
  try {
    const response = await Api.get(`/todays_project/quick_info`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const createProject = createAsyncThunk('projects/createProject', async project => {
  const formData = new FormData();
  project.images.forEach(image => {
    if (image.length !== 0) {
      formData.append('images[]', image);
    }
  });
  formData.append('name', project.name);
  formData.append('description', project.description);
  formData.append('goal', project.goal);
  formData.append('fee', project.fee);
  formData.append('deadline', project.deadline);
  project.team_members.forEach(member => {
    if (Object.entries(member).length) {
      formData.append('team_members_attributes[][name]', member.name);
      formData.append('team_members_attributes[][avatar_url]', member.avatar_url);
    }
  });
  formData.append('category', project.category);
  formData.append('statement', project.statement);
  formData.append('user_id', project.user_id);
  try {
    const resp = await Api.post(`/projects/`, project);
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

export const editProject = createAsyncThunk('projects/editProject', async project => {
  const formData = new FormData();
  project.images.forEach(image => {
    if (image.length !== 0) {
      formData.append('images[]', image);
    }
  });
  formData.append('name', project.name);
  formData.append('description', project.description);
  formData.append('goal', project.goal);
  formData.append('fee', project.fee);
  formData.append('deadline', project.deadline);
  project.team_members.forEach(member => {
    if (Object.entries(member).length) {
      formData.append('team_members_attributes[][name]', member.name);
      formData.append('team_members_attributes[][avatar_url]', member.avatar_url);
    }
  });
  formData.append('category', project.category);
  formData.append('statement', project.statement);
  formData.append('user_id', 1);
  try {
    const resp = await Api.put(`/projects/${project.id}`, project);
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

export const deleteProject = createAsyncThunk('projects/deleteProject', async payload => {
  try {
    await Api.delete(`/projects/${payload.id}`);
    return { id: payload.id };
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  featuredProject: {},
  mostInvested: [],
  projects: [],
  quickInfo: {},
  selectedProject: {}
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,

  extraReducers: {
    [getProject.fulfilled]: (state, { payload }) => {
      return { ...state, selectedProject: payload };
    },

    [getMyProjects.fulfilled]: (state, { payload }) => {
      return { ...state, projects: typeof payload === 'string' ? [] : payload };
    },

    [getFeaturedProject.fulfilled]: (state, { payload }) => {
      return { ...state, featuredProject: payload };
    },

    [getMostInvested.fulfilled]: (state, { payload }) => {
      return { ...state, mostInvested: payload };
    },

    [getQuickInfo.fulfilled]: (state, { payload }) => {
      return { ...state, quickInfo: payload };
    },

    [createProject.fulfilled]: (state, { payload }) => {
      return { ...state, projects: [...state.projects, payload] };
    },

    [editProject.fulfilled]: (state, { payload }) => {
      const newProjects = [...state.projects];
      const index = project => project.id === payload.id;
      const selectedProject = newProjects.findIndex(index);
      newProjects[selectedProject] = payload;
      return { ...state, projects: newProjects };
    },

    [deleteProject.fulfilled]: (state, { payload }) => {
      const filter = project => project.id !== payload.id;
      const filteredProjects = state.projects.filter(filter);
      return { ...state, projects: filteredProjects };
    }
  }
});

export default projectSlice.reducer;
