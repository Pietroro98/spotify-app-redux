import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/Homepage";
import MediaPlayer from "./components/MediaPlayer";
// import Favorites from "./components/Favorites";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YourLibrary from './components/YourLibrary';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="container-fluid">
      <div className="row">
      <MyNavbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/your-library" element={<YourLibrary />} />
      
      </Routes>
      </div>
      {/* <Favorites /> */}
    </div>
    <MediaPlayer />
  </div>
  </BrowserRouter>
  );
}

export default App;
