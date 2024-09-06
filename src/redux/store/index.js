import { configureStore } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/selectedSongReducer";
import favoritesReducer from "../reducers/favoritesReducer";
import searchReducer from "../reducers/searchReducer";

const store = configureStore({
  reducer: {
    selectedSong: selectedSongReducer,
    favorites: favoritesReducer,
    searchResults: searchReducer,
  },
});

export default store;
