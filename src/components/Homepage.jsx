import React from "react";
import PlayerSection from "./PlayerSection";

const Homepage = () => {
    return(
        <main className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <section id="rock">
              <h2>Rock Classics</h2>
              <PlayerSection section="rock" artistName="queen" />
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <section id="pop">
              <h2>Pop Culture</h2>
              <PlayerSection section="pop" artistName="katyperry" />
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <section id="hiphop">
              <h2>#HipHop</h2>
              <PlayerSection section="hipHop" artistName="eminem" />
            </section>
          </div>
        </div>
      </main>
  )
};

export default Homepage;