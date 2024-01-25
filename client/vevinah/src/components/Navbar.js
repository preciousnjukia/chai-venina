// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'react-feather';

function Navbar({  cartItems }) {
  const cartLength = cartItems ? cartItems.length : 0;

  return (
    <div className="navbar">
      <a href="" className="navbar-brand">
        <img src="https://imgur.com/a/8xykr28" alt="Vevinah Brand" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
        <Link to={{ pathname: '/cart', state: { cartItems: cartItems } }}>
          <ShoppingCart />
          {cartLength > 0 && <span>{cartLength}</span>}
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;




