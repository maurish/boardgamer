import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Boardgamer</h1>
    <ul className="App-navigation">
      <li><NavLink activeClassName="current" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="current" to="/games">Games</NavLink></li>
      <li><NavLink activeClassName="current" to="/sessions">Sessions</NavLink></li>
    </ul>
  </header>
);

export default Header;
