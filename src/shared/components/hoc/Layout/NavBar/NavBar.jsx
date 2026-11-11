import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        <li>
          <NavLink to="/" exact>
            Line Graph - Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
