import { put, takeLatest, call } from 'redux-saga/effects';

import { Types as UserTypes } from 'process/reducers/user';
import Api from 'process/api';

export const signIn = function* ({ body }) {
  try {
    const res = yield call(Api.post, `/auth/sign_in/`, body);
    Api.setHeaders(res.headers);
    yield put({
      type: UserTypes.UPDATE_PROPS,
      props: { ...res.data, isLoggedIn: true, headers: res.headers }
    });
  } catch (e) {
    alert('Something went wrong');
  }
};

export const signUp = function* ({ body }) {
  try {
    const res = yield call(Api.post, `/auth`, body);
    yield put({ type: UserTypes.UPDATE_PROPS, props: { signUp: res.data } });
  } catch (e) {
    alert('Something went wrong');
  }
};

export const signOut = function* () {
  try {
    yield put({
      type: UserTypes.RESET
    });
  } catch (e) {
    alert('Something went wrong');
  }
};

const userSaga = [
  takeLatest(UserTypes.SIGN_IN, signIn),
  takeLatest(UserTypes.SIGN_UP, signUp),
  takeLatest(UserTypes.SIGN_OUT, signOut)
];

export default userSaga;
