import { all } from 'redux-saga/effects';

import applicationSagas from './application';
import projectSagas from './project';
import userSaga from './user';

export default function* root() {
  yield all([...applicationSagas, ...projectSagas, ...userSaga]);
}
