import { all, takeLatest } from 'redux-saga/effects';

import { FETCH_REQUEST } from '../ducks/results';

import saveResultsMiddleware from './results'

export default function* rootSaga() {
	yield all([
		takeLatest(FETCH_REQUEST, saveResultsMiddleware)
	])
}
