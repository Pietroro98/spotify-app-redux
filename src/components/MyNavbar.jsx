import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";


const MyNavbar = () => {

    return(
        <aside className="col col-2">
        <nav
          className="navbar navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <div className="container flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="Spotify Logo" width="131" height="40" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/">
                      <i className="bi bi-house-door-fill"></i>
                      &nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/your-library">
                      <i className="bi bi-book-fill"></i>
                      &nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary btn-sm h-100">
                          GO
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn text-center">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <div className="policy-links">
              <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
            </div>
          </div>
        </nav>
      </aside>
    )
};

export default MyNavbar;
