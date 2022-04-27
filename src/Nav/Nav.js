import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div>
      <div className="navbar bg-secondary text-neutral">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl hover:bg-accent">
            Memory Lane
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="hover:bg-accent" to="/">
                Home
              </Link>
            </li>
            <li tabIndex="0">
              <Link className="hover:bg-accent" to="/AboutUs">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
