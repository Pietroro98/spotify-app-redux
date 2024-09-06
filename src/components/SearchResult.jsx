import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-audio-player';

const SearchResults = () => {
  const searchResults = useSelector((state) => state.searchResults);

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
                {/* Aggiungi il componente AudioPlayer per riprodurre la preview */}
                <AudioPlayer
                  src={song.preview}  // Assuming `preview` contains the URL for the audio
                  controls
                  style={{ width: '100%' }} // Ensures the player fits the card width
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
