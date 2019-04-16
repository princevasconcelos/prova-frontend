import { put, delay } from 'redux-saga/effects';

import { storeQuery } from '../ducks/query';

export default function* storeQueryMiddleware(action) {
  yield delay(1000);
  yield put(storeQuery(action.payload));
}
