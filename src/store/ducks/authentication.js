const AUTHENTICATE = 'AUTHENTICATE';

const INITIAL_STATE = {
  isAuthenticated: false,
  token: '',
};

const authenticateReduce = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        isAuthenticated: true,
        token: action.payload,
      };
    default:
      return state;
  }
};

export const storeToken = data => ({
  type: AUTHENTICATE,
  payload: data,
});

export default authenticateReduce;
