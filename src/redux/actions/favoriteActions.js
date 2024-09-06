
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const addLike = (song) => ({
  type: ADD_LIKE,
  payload: song
});

export const removeLike = (songId) => ({
  type: REMOVE_LIKE,
  payload: songId
});
