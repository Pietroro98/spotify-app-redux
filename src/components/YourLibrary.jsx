import React from "react";
import { useSelector } from "react-redux";
import AudioPlayer from "react-audio-player";

const YourLibrary = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <h1 className="text-center text-light">I tuoi brani preferiti:</h1>
      {favorites.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4  py-3">
          {favorites.map((song) => (
            <div className="col text-center" key={song.id}>
              <img
                className="img-fluid"
                src={song.album.cover_medium}
                alt={`Cover of ${song.title}`}
              />

              <p>
                Track: "{song.title}"
                <br /> Artist: {song.artist.name}
              </p>
              <AudioPlayer
                src={song.preview}
                controls
                style={{ width: "50%" }}
                volume={0.2}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-light">
          Al momento non hai nessuna canzone agiiunta nei tuoi prefiriti!
        </p>
      )}
    </div>
  );
};

export default YourLibrary;
