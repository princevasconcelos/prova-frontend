const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

const INITIAL_STATE = [];

const favoriteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			return state.includes(action.payload)
				? state.filter(element => element !== action.payload)
				: state.concat(action.payload)
		default:
			return state;
	}
}

export const favoriteHandler = id => {
	return {
		type: TOGGLE_FAVORITE,
		payload: id
	}
}

export default favoriteReducer
