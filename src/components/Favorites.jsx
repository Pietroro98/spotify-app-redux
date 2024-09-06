import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSong } from '../redux/actions/songActions';
import { removeLike } from '../redux/actions/favoriteActions';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  
  const handleRemoveLike = (songId) => {
    dispatch(removeLike(songId)); 

  };

  
  const handleSongClick = (song) => {
    dispatch(selectSong(song));
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3">
        {favorites.length > 0 ? (
          favorites.map((song) => (
            <div className="col text-center" key={song.id}>
              <img
                className="img-fluid"
                src={song.album.cover_medium}
                alt={`Cover of ${song.title}`}
                onClick={() => handleSongClick(song)}
                style={{ cursor: 'pointer' }}
              />
              <p>
                Track: "{song.title}"
                <br /> Artist: {song.artist.name}
              </p>
              <button onClick={() => handleRemoveLike(song.id)}>
                Remove from Favorites
              </button>
            </div>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
