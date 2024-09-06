import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSong } from '../redux/actions/songActions';
import { addLike, removeLike } from '../redux/actions/favoriteActions';
import { saveSearchResults } from '../redux/actions/searchActions';
import "bootstrap-icons/font/bootstrap-icons.css";

const albumCard = (singleSong, handleSongClick, isFavorite, toggleFavorite) => (
  <div className="col text-center" key={singleSong.id} onClick={() => handleSongClick(singleSong)}>
    <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
    <p>
      Track: "{singleSong.title}"
      <br /> Artist: {singleSong.artist.name}
    </p>
    <button className="btn btn-outline-danger" onClick={(e) => {
      e.stopPropagation(); 
      toggleFavorite(singleSong);
    }}>
      {isFavorite 
          ? <i className="bi bi-suit-heart-fill text-danger "></i> 
          : <i className="bi bi-suit-heart"></i>}
    </button>
  </div>
);

const PlayerSection = ({ section, artistName }) => {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const handleSongClick = (song) => {
    dispatch(selectSong(song));
  };

  const toggleFavorite = (song) => {
    if (favorites.some(favorite => favorite.id === song.id)) {
      dispatch(removeLike(song.id));
    } else {
      dispatch(addLike(song));
    }
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
        if (response.ok) {
          let { data } = await response.json();
          setSongs(data.slice(0, 4));
          dispatch(saveSearchResults(data)); 
        } else {
          throw new Error('Error in fetching songs');
        }
      } catch (err) {
        console.log('error', err);
      }
    };
    fetchSongs();
  }, [artistName, dispatch]);

  return (
    <div
      id={`${section}Section`}
      className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
    >
      {songs.map((song) => albumCard(song, handleSongClick, favorites.some(favorite => favorite.id === song.id), toggleFavorite))}
    </div>
  );
};

export default PlayerSection;
