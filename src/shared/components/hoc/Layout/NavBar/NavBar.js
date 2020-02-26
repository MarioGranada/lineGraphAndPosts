import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-list">
        <NavLink to="/" exact>
          Line Graph - Home
        </NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
