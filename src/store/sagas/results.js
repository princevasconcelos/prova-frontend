import { put, delay } from 'redux-saga/effects';

import { saveResults } from '../ducks/results'

export default function* saveResultsMiddleware(action) {
	yield delay(1000);
	yield put(saveResults(action.payload))
}
