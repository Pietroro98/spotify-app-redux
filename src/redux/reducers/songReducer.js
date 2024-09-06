import { SELECT_SONG } from '../actions/songActions';

const initialState = {
  selectedSong: null
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return { ...state, selectedSong: action.payload };
    default:
      return state;
  }
};

export default songReducer;