const CHANGE_TYPE = 'CHANGE_TYPE';

const INITIAL_STATE = 'artist';

const typeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export const changeType = data => ({
  type: 'CHANGE_TYPE',
  payload: data,
});

export default typeReducer;
