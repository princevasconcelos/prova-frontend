const STORE_QUERY = 'STORE_QUERY';
export const CHANGE_QUERY = 'CHANGE_QUERY';

const INITIAL_STATE = '';

const queryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export const storeQuery = query => ({
  type: STORE_QUERY,
  payload: query,
});

export const saveQuery = query => ({
  type: CHANGE_QUERY,
  payload: query,
});

export default queryReducer;
