import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-audio-player';
import { addLike, removeLike } from '../redux/actions/favoriteActions';

const SearchResults = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (songId) => {
    return favorites.some(favorite => favorite.id === songId);
  };

  const toggleFavorite = (song) => {
    if (isFavorite(song.id)) {
      dispatch(removeLike(song.id));
    } else {
      dispatch(addLike(song));
    }
  };

  if (!searchResults || searchResults.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <div className="row">
        {searchResults.map(song => (
          <div className="col-md-3 mb-4" key={song.id} style={{ maxWidth: '220px' }}>
            <div className="card" style={{ width: '100%' }}>
              <img 
                src={song.album.cover_medium} 
                alt={song.title} 
                className="card-img-top" 
                style={{ height: 'auto', maxHeight: '150px' }}
              />
              <div className="card-body" style={{ textAlign: 'center' }}>
                <h5 className="card-title" style={{ fontSize: '1rem', fontWeight: 'bold' }}>{song.title}</h5>
                <p className="card-text" style={{ fontSize: '0.875rem' }}>{song.artist.name}</p>
                <AudioPlayer
                  src={song.preview}  
                  controls
                  style={{ width: '100%' }} 
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFavorite(song);
                  }}
                >
                  {isFavorite(song.id) 
                    ? <i className="bi bi-suit-heart-fill text-danger"></i> 
                    : <i className="bi bi-suit-heart"></i>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
