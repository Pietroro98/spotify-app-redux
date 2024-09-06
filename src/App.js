import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";
import MediaPlayer from "./components/MediaPlayer";
import Favorites from "./components/Favorites";
function App() {
  return (
    <div className="App">
    <div className="container-fluid">
      <div className="row">
      <MyNavbar />
      <Homepage />
      <Favorites />
      </div>
    </div>
    <MediaPlayer />
  </div>
  );
}

export default App;
