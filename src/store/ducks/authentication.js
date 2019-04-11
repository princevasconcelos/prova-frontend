const AUTHENTICATE = 'AUTHENTICATE'
const TOKEN_NOT_FOUND = 'TOKEN_NOT_FOUND'

const INITIAL_STATE = {
	isAuthenticated: false,
	token: ''
}

const authenticateReduce = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				isAuthenticated: true,
				token: action.payload
			}
		case TOKEN_NOT_FOUND:
			return INITIAL_STATE
		default:
			return state
	}
}

export const authenticate = data => {
	return {
		type: AUTHENTICATE,
		payload: data
	}
}

export const tokenNotFound = () => {
	return {
		type: TOKEN_NOT_FOUND
	}
}

export default authenticateReduce;
