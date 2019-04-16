export const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';

const INITIAL_STATE = {
  data: [],
  total: 0,
  loading: false,
  error: null,
};

const resultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.data.items,
        total: action.data.total,
        loading: false,
        error: null,
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchData = params => ({
  type: FETCH_REQUEST,
  payload: params,
});

export const saveData = data => ({
  type: FETCH_SUCCESS,
  data,
});

export const fetchError = () => ({
  type: FETCH_FAILED,
});

export default resultsReducer;
