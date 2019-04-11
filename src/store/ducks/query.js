const FETCH_QUERY = 'FETCH_QUERY';

const INITIAL_STATE = '';

const queryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_QUERY:
			return action.payload
		default:
			return state
	}
}

export const saveQuery = query => {
	return {
		type: FETCH_QUERY,
		payload: query
	}
}

export default queryReducer;
