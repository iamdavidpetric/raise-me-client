import { all } from 'redux-saga/effects';

import applicationSagas from './application';
import projectSagas from './project';

export default function* root() {
  yield all([...applicationSagas, ...projectSagas]);
}
