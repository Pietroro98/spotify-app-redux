import { ADD_LIKE, REMOVE_LIKE } from '../actions/favoriteActions';

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return [...state, action.payload];
    case REMOVE_LIKE:
      return state.filter(favorite => favorite.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
