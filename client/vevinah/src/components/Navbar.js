import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Vevinah</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Orders</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



