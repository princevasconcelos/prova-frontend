export const FETCH_REQUEST = 'FETCH_REQUEST';
export const SAVE_RESULTS = 'SAVE_RESULTS';

const INITIAL_STATE = {
	data: [],
	total: 0
}

const resultsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SAVE_RESULTS:
			return (action.payload || {}).total
			 ? {
				data: action.payload.items,
				total: action.payload.total
			}
			: INITIAL_STATE;
		default:
			return state;
	}
}

export const saveResults = data => {
	return {
		type: SAVE_RESULTS,
		payload: data
	}
}

export const saveData = data => {
	return {
		type: FETCH_REQUEST,
		payload: data
	}
}

export default resultsReducer;
