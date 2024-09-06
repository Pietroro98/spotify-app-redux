import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch } from 'react-redux';
import { saveSearchResults } from '../redux/actions/searchActions';

const MyNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`);
        if (response.ok) {
          let { data } = await response.json();
          console.log('Search Results:', data); // Debug
          dispatch(saveSearchResults(data));
          navigate('/search-results');
        } else {
          console.error('Failed to fetch search results');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
  };

  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Link>
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100" onClick={handleSearch}>
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
  );
};

export default MyNavbar;
