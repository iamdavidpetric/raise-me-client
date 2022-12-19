import { all } from 'redux-saga/effects';

import userSaga from './user';
import growlSaga from './growl';
import projectSagas from './project';
import applicationSagas from './application';

export default function* root() {
  yield all([...applicationSagas, ...projectSagas, ...growlSaga, ...userSaga]);
}
