import React from 'react';
import { Link } from 'react-router-dom';
const MenuBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-black text-white">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Social Media Wall</Link>
            </li>
          </ul>
          <div className="dropdown navbar-nav">
            <button className="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li className='nav-item'>
                <Link className="nav-link text-black dropdown-item" to="/notification">Notification</Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-link text-black dropdown-item" to="/profile">Profile</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuBar;
