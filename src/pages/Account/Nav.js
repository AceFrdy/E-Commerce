import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/alamat" activeClassName="active">
            Alamat
          </NavLink>
        </li>
        <li>
          <NavLink to="/pesanan" activeClassName="active">
            Pesanan
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="active">
            Log out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
