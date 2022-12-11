import { put, takeLatest, call } from 'redux-saga/effects';

import { Types as UserTypes } from 'process/reducers/user';
import Api from 'process/api';

export const signIn = function* ({ body }) {
  try {
    const res = yield call(Api.post, `/auth/sign_in/`, body);
    yield put({ type: UserTypes.UPDATE_PROPS, props: { signIn: res.data } });
  } catch (e) {
    alert('Something went wrong');
  }
};

const userSaga = [takeLatest(UserTypes.SIGN_IN, signIn)];

export default userSaga;
