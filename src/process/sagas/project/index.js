import { call, delay, put, select, takeLatest } from 'redux-saga/effects';

import Api from 'process/api';
import Paths from 'process/routes/paths';
import { Types as GrowlTypes } from 'process/reducers/growl';
import { Types as ProjectTypes } from 'process/reducers/project';
import { Types as TransientTypes } from 'process/reducers/transient';

export const getFeaturedProject = function* () {
  try {
    const res = yield call(Api.get, '/todays_project/null');
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { featuredProject: res.data } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Feature project loaded'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const searchProject = function* ({ selectedCategory, search }) {
  try {
    yield delay(200);
    const res = yield call(
      Api.get,
      `/projects?category=${selectedCategory}&search=${search}`
    );
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { searchResults: res.data } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Projects loaded'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const getMyProjects = function* () {
  try {
    const res = yield call(Api.get, '/projects/my_projects/');
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { projects: res.data } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Projects loaded'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const getMostInvested = function* () {
  try {
    const res = yield call(Api.get, '/todays_project/');
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { mostInvested: res.data } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Top projects loaded'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const getQuickInfo = function* () {
  try {
    const res = yield call(Api.get, '/todays_project/quick_info');
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { quickInfo: res.data } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Projects info loaded'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const deleteProject = function* ({ payload }) {
  try {
    const res = yield call(Api.delete, `/projects/${payload.id}`);
    const projects = yield select(state => state.project.projects);
    const filteredProjects = projects.filter(filter => res.data.id !== filter.id);
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { projects: filteredProjects } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Project deleted'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const getProject = function* ({ payload }) {
  try {
    const res = yield call(Api.get, `/projects/${payload.id}`);
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { selectedProject: res.data } });
    yield put({ type: TransientTypes.UPDATE_PROPS, props: { ...res.data } });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'info',
          content: 'Project loaded'
        }
      ]
    });
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const getPaymentLink = function* ({ payload }) {
  try {
    const res = yield call(Api.post, '/payment', payload);
    window.location.replace(res.data.url);
  } catch (e) {
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'fail',
          content: 'Something went wrong'
        }
      ]
    });
  }
};

export const editProject = function* ({ project }) {
  const formData = new FormData();
  project?.images.forEach(image => {
    if (image.length !== 0) {
      formData.append('images[]', image);
    }
  });
  formData.append('name', project?.name);
  formData.append('description', project?.description);
  formData.append('goal', project?.goal);
  formData.append('fee', project?.fee);
  formData.append('deadline', project?.deadline);
  project?.team_members.forEach(member => {
    if (Object.entries(member).length) {
      formData.append('team_members_attributes[][name]', member.name);
      formData.append('team_members_attributes[][avatar_url]', member.avatar_url);
    }
  });
  formData.append('category', project?.category);
  formData.append('statement', project?.statement);
  formData.append('user_id', project?.user_id);
  try {
    yield call(Api.put, `/projects/${project.id}`, project);
    yield put(window.location.replace(Paths.private.MY_PROJECTS_PATH));
  } catch (e) {
    console.log(e);
  }
};

export const createProject = function* ({ project }) {
  const newProject = { ...project, team_members_attributes: project.team_members };
  try {
    const res = yield call(Api.post, '/projects/', newProject);
    yield put({ type: ProjectTypes.UPDATE_PROPS, props: { project: res.data } });
    yield put(window.location.replace(Paths.private.MY_PROJECTS_PATH));
  } catch (e) {
    console.log(e);
  }
};

const projectSagas = [
  takeLatest(ProjectTypes.CREATE_PROJECT, createProject),
  takeLatest(ProjectTypes.DELETE_PROJECT, deleteProject),
  takeLatest(ProjectTypes.EDIT_PROJECT, editProject),
  takeLatest(ProjectTypes.GET_FEATURED_PROJECT, getFeaturedProject),
  takeLatest(ProjectTypes.GET_MOST_INVESTED, getMostInvested),
  takeLatest(ProjectTypes.GET_MY_PROJECTS, getMyProjects),
  takeLatest(ProjectTypes.GET_PROJECT, getProject),
  takeLatest(ProjectTypes.GET_QUICK_INFO, getQuickInfo),
  takeLatest(ProjectTypes.GET_PAYMENT_LINK, getPaymentLink),
  takeLatest(ProjectTypes.SEARCH_PROJECT, searchProject)
];

export default projectSagas;
