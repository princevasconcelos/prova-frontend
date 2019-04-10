const CHANGE_TAB = 'CHANGE_TAB'

const INITIAL_STATE = 'Artists';

const tabReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_TAB:
			return action.payload
		default:
			return state;
	}
}

export const changeTab = data => {
	return {
		type: 'CHANGE_TAB',
		payload: data
	}
}

export default tabReducer;
