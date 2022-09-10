import { put, takeLatest, call } from 'redux-saga/effects';

import { Types as ProjectTypes } from 'process/reducers/project';
import Api from 'process/api';

export const getFeaturedProject = function* () {
  try {
    const res = yield call(Api.get, '/todays_project/null');
    yield put({
      type: ProjectTypes.UPDATE_PROPS,
      props: { featuredProject: res.data }
    });
  } catch (e) {
    alert('Something went wrong');
  }
};

export const getMostInvested = function* () {
  try {
    const res = yield call(Api.get, '/todays_project/');
    yield put({
      type: ProjectTypes.UPDATE_PROPS,
      props: { mostInvested: res.data }
    });
  } catch (e) {
    alert('Something went wrong');
  }
};
export const getQuickInfo = function* () {
  try {
    const res = yield call(Api.get, '/todays_project/quick_info');
    yield put({
      type: ProjectTypes.UPDATE_PROPS,
      props: { quickInfo: res.data }
    });
  } catch (e) {
    alert('Something went wrong');
  }
};

export const getProject = function* ({ payload }) {
  try {
    const res = yield call(Api.get, `/projects/${payload.id}`);
    yield put({
      type: ProjectTypes.UPDATE_PROPS,
      props: { selectedProject: res.data }
    });
  } catch (e) {
    alert('Something went wrong');
  }
};

const projectSagas = [
  takeLatest(ProjectTypes.GET_FEATURED_PROJECT, getFeaturedProject),
  takeLatest(ProjectTypes.GET_MOST_INVESTED, getMostInvested),
  takeLatest(ProjectTypes.GET_QUICK_INFO, getQuickInfo),
  takeLatest(ProjectTypes.GET_PROJECT, getProject)
];

export default projectSagas;
