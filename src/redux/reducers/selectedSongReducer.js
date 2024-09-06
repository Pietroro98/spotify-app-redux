import { SELECT_SONG } from "../actions/songActions";


const initialState = null;

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return action.payload;
    default:
      return state;
  }
};

export default selectedSongReducer;
