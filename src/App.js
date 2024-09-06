import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";
import MediaPlayer from "./components/MediaPlayer";

function App() {
  return (
    <div className="App">
    <div className="container-fluid">
      <div className="row">
      <MyNavbar />
      <Homepage />
      </div>
    </div>
    <MediaPlayer />
  </div>
  );
}

export default App;
