import React from 'react';
import { LifeBuoy } from 'react-feather';
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
          <Link to="/cart">Orders</Link>
          </li>
        <li class="nav-item">
          <Link to="/contact-us" >Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/about-us">About Us</Link>
          </li>
      </ul>
    </nav>
    </body>
    </html>
  );
}

export default Navbar;



