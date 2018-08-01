import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../constants';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    {/*<Link to={'/'}>Hem</Link>*/}
    {/*<Link to={'/live'}>Turnédatum</Link>*/}
    <a href="mailto:kim.wijk@gmail.com">Kontakt</a>
    <a href={constants.urls.spotify} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-spotify"></i>
    </a>
    <a href={constants.urls.instagram} target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
  );

export default Nav;
