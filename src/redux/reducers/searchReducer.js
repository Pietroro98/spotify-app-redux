import { SAVE_SEARCH_RESULTS } from '../actions/searchActions';

const initialState = [];

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
