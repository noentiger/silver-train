import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../constants';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <Link to={'/'}>Hem</Link>
    <Link to={'/live'}>Turnédatum</Link>
    <a href={constants.urls.facebook} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href={constants.urls.spotify} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-spotify"></i>
    </a>
  </div>
  );

export default Nav;
