import { takeLatest } from 'redux-saga/effects';

import { Types as ApplicationTypes } from '../../reducers/application';

export const persisted = function* () {};

const applicationSagas = [takeLatest(ApplicationTypes.PERSISTED, persisted)];

export default applicationSagas;
