import { put, takeLatest, call } from 'redux-saga/effects';

import Api from 'process/api';
import { Types as UserTypes } from 'process/reducers/user';
import { Types as GrowlTypes } from 'process/reducers/growl';

export const signIn = function* ({ body }) {
  try {
    const res = yield call(Api.post, `/auth/sign_in/`, body);
    Api.setHeaders(res.headers);
    yield put({
      type: UserTypes.UPDATE_PROPS,
      props: { ...res.data, isLoggedIn: true, headers: res.headers }
    });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'success',
          content: 'Login successfully'
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

export const signUp = function* ({ body }) {
  try {
    const res = yield call(Api.post, `/auth`, body);
    yield put({
      type: UserTypes.UPDATE_PROPS,
      props: { ...res.data, isLoggedIn: true, headers: res.headers }
    });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'success',
          content: 'Sign up successfully'
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

export const signOut = function* () {
  try {
    yield put({
      type: UserTypes.RESET
    });
    yield put({
      type: GrowlTypes.CREATE_GROWLS,
      growls: [
        {
          type: 'success',
          content: 'Log out successfully'
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

const userSaga = [
  takeLatest(UserTypes.SIGN_IN, signIn),
  takeLatest(UserTypes.SIGN_OUT, signOut),
  takeLatest(UserTypes.SIGN_UP, signUp)
];

export default userSaga;
