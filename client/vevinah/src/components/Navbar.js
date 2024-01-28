// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'react-feather';
import logo from "../assets/chai-vevinah-logo.png"

function Navbar({  cartItems }) {
  const cartLength = cartItems ? cartItems.length : 0;

  return (
    <div className="navbar">
      <a href='/' class="navbar-brand">
            <img src={logo} alt="Vevinah Brand" />
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




