
import React from 'react';
import { useSelector } from 'react-redux';
import shuffleIcon from '../assets/playerbuttons/shuffle.png';
import prevIcon from '../assets/playerbuttons/prev.png';
import playIcon from '../assets/playerbuttons/play.png';
import nextIcon from '../assets/playerbuttons/next.png';
import repeatIcon from '../assets/playerbuttons/repeat.png';
import AudioPlayer from 'react-audio-player';



const MediaPlayer = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
    <div className="row h-100">
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex-column justify-content-center align-items-center">
          {selectedSong && (
            <div className="col-6 col-md-4 text-center text-white">
              <p>
                Now Playing: {selectedSong.title} by {selectedSong.artist.name}
              </p>
              <AudioPlayer
                src={selectedSong.preview} 
                autoPlay
                controls
                volume={0.2}
              />
            </div>
          )}
          <div className="col-6 col-md-4 playerControls">
            <div className="d-flex">
              <a href="#">
                <img src={shuffleIcon} alt="shuffle" />
              </a>
              <a href="#">
                <img src={prevIcon} alt="prev" />
              </a>
              <a href="#">
                <img src={playIcon} alt="play" />
              </a>
              <a href="#">
                <img src={nextIcon} alt="next" />
              </a>
              <a href="#">
                <img src={repeatIcon} alt="repeat" />
              </a>
            </div>
            <div className="progress mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MediaPlayer;
