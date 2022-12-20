import { v4 as uuidv4 } from 'uuid';
import { delay, put, takeEvery } from 'redux-saga/effects';

import { Types as GrowlTypes } from 'process/reducers/growl';

export const createGrowls = function* ({ growls }) {
  const growlWithIds = growls?.map(growl => {
    return { ...growl, id: uuidv4() };
  });
  yield put({ type: GrowlTypes.PUSH_GROWLS, props: growlWithIds });
  yield delay(4000);
  yield put({ type: GrowlTypes.POP_GROWLS, props: growlWithIds });
};

const growlSaga = [takeEvery(GrowlTypes.CREATE_GROWLS, createGrowls)];

export default growlSaga;
