import React from 'react';

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
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Menu</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Orders</a></li>
      </ul>
    </nav>
  </body>
</html>
  );
}

export default Navbar;



