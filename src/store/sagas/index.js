import { all, takeLatest } from 'redux-saga/effects';

import { FETCH_REQUEST } from '../ducks/results';
import requestData from './results';

import { CHANGE_QUERY } from '../ducks/query';
import storeQuery from './query';

export default function* rootSaga() {
  yield all([takeLatest(FETCH_REQUEST, requestData), takeLatest(CHANGE_QUERY, storeQuery)]);
}
