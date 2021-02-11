import * as actionTypes from './actions';

const initialState = {
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.value,
      }
  }

  return state;
}

export default reducer;
