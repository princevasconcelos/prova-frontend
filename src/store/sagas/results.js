import { put, call, delay } from 'redux-saga/effects';

import { saveData, fetchError } from '../ducks/results'

import API from '../../services/api'

export default function* requestData(action) {
	const { payload: { query, type, token } } = action

	yield delay(1000);

	const result = yield call(API.search, query, type, token)
	result.error
		? yield put(fetchError())
		: yield put(saveData(result[type+'s']))
}
