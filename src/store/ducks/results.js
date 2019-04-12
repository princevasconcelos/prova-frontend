export const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED'

// export const SAVE_RESULTS = 'SAVE_RESULTS';

const INITIAL_STATE = {
	data: [],
	total: 0,
	loading: false,
	error: null
}

const resultsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				...state,
				loading: true
			}
		case FETCH_SUCCESS:
			return {
				...state,
				data: action.data.items,
				total: action.data.total,
				loading: false,
				error: null
			}
		case FETCH_FAILED:
			return {
				...state,
				error: true,
				loading: false
			}
		// case SAVE_RESULTS:
		// 	return (action.payload || {}).total
		// 	 ? {
		// 		data: action.payload.items,
		// 		total: action.payload.total
		// 	}
		// 	: INITIAL_STATE;
		default:
			return state;
	}
}

export const fetchData = params => {
	return {
		type: FETCH_REQUEST,
		payload: params
	}
}

export const saveData = data => {
	return {
		type: FETCH_SUCCESS,
		data
	}
}

export const fetchError = () => {
	return {
		type: FETCH_FAILED
	}
}

export default resultsReducer;
