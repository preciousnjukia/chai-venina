import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import logo from "../assets/chai-vevinah-logo.png";
import { useEffect, useState } from "react";
function Navbar() {
  const savedCart = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(
    savedCart ? JSON.parse(savedCart) : []
  );
  useEffect(() => {
    console.log(savedCart);
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
      // console.log(cart);
    }
  }, [savedCart]);
  const [cartLength, updateCartLength] = useState(
    cartItems ? cartItems.length : 0
  );

  useEffect(() => {
    updateCartLength(savedCart ? JSON.parse(savedCart).length : 0);
  }, [savedCart]);

  return (
    <div className="navbar">
      <a href="/" class="navbar-brand">
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
          <Link to={{ pathname: "/cart", state: { cartItems: cartItems } }}>
            <ShoppingCart />
            {cartLength > 0 && <span>{cartLength}</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
