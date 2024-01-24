import React from 'react';
import { ShoppingCart } from 'react-feather';

import { Link } from 'react-router-dom';
function Navbar() {
  return (  
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-brand">Vevinah</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link  to="/">Home</Link>
          </li>
        <li class="nav-item">
          <Link to="/menu">Menu</Link>
          </li>
        <li class="nav-item">
          <Link to="/contact-us" >Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/about-us">About Us</Link>
          </li>
        <li>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={24} />
        </Link>
      </li>
      </ul>
    </nav>
    </body>
    </html>
  );
}

export default Navbar;



