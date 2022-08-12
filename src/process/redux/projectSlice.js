import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import baseUrl from '../api/index';

export const getProjectAsync = createAsyncThunk(
  'projects/getProjectAsync',
  async payload => {
    try {
      const response = await axios.get(`${baseUrl}/projects/${payload.id}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getMyProjectsAsync = createAsyncThunk(
  'projects/getMyProjectsAsync',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/projects/my_projects/`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getFeaturedProjectAsync = createAsyncThunk(
  'projects/getFeaturedProjectAsync',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/todays_project/null`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getMostInvestedAsync = createAsyncThunk(
  'projects/getMostInvestedAsync',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/todays_project/`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const getQuickInfoAsync = createAsyncThunk(
  'projects/getQuickInfoAsync',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/todays_project/quick_info`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const createProjectAsync = createAsyncThunk(
  'projects/createProjectAsync',
  async project => {
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
      const resp = await axios.post(`${baseUrl}/projects/`, project);
      return resp.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const editProjectAsync = createAsyncThunk(
  'projects/editProjectAsync',
  async project => {
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
      const resp = await axios.put(`${baseUrl}/projects/${project.id}`, project);
      return resp.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteProjectAsync = createAsyncThunk(
  'projects/deleteProjectAsync',
  async payload => {
    try {
      await axios.delete(`${baseUrl}/projects/${payload.id}`);
      return { id: payload.id };
    } catch (err) {
      return err.message;
    }
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    featuredProject: {},
    mostInvested: [],
    projects: [],
    quickInfo: {},
    selectedProject: {}
  },

  reducers: {
    setSelectedProject: (state, action) => {
      return { ...state.projects, selectedProject: action.payload };
    }
  },

  extraReducers: {
    [getProjectAsync.fulfilled]: (state, { payload }) => {
      return { ...state, selectedProject: payload };
    },

    [getMyProjectsAsync.fulfilled]: (state, { payload }) => {
      return { ...state, projects: payload };
    },

    [getFeaturedProjectAsync.fulfilled]: (state, { payload }) => {
      return { ...state, featuredProject: payload };
    },

    [getMostInvestedAsync.fulfilled]: (state, { payload }) => {
      return { ...state, mostInvested: payload };
    },

    [getQuickInfoAsync.fulfilled]: (state, { payload }) => {
      return { ...state, quickInfo: payload };
    },

    [createProjectAsync.fulfilled]: (state, { payload }) => {
      return { ...state, projects: [...state.projects, payload] };
    },

    [editProjectAsync.fulfilled]: (state, { payload }) => {
      const newProjects = [...state.projects];
      const index = project => project.id === payload.id;
      const selectedProject = newProjects.findIndex(index);
      newProjects[selectedProject] = payload;
      return { ...state, projects: newProjects };
    },

    [deleteProjectAsync.fulfilled]: (state, { payload }) => {
      const filter = project => project.id !== payload.id;
      const filteredProjects = state.projects.filter(filter);
      return { ...state, projects: filteredProjects };
    }
  }
});

export const { setSelectedProject } = projectSlice.actions;

export default projectSlice.reducer;
