import { all, call, takeLatest, put } from 'redux-saga/effects';
import api from '~/services/api';
import apiRoutes from '~/services/apiRoutes';
import { deviceRegister } from './actions';

export function* deviceRequest({ payload }) {
  try {
    const { INSIRA_API_AQUI } = yield apiRoutes();

    const {deviceToken: token_expo } = payload;

    const { data } = yield call(api.post, INSIRA_API_AQUI, {
      token_expo,
    });

    put(deviceRegister());
  } catch (e) {}
}

export default all([takeLatest('@device/REQUEST', deviceRequest)]);
