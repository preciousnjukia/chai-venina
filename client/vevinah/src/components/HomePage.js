import React, { useState } from "react";
import "../App.css";
import ImageCarousel from "./ImageCarousel";
import TodaysSpecialSection from "./TodaysSpecialSection";
import DineIn from "./dineIn";
import ReviewSection from "./ReviewSection";
import Footer from "./Footer";
import HomeFooter from "./HomeFooter";

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Order Now</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <main>
        <div
          className={`image-carousel-container ${
            isMenuOpen ? "menu-open" : ""
          }`}
        >
          <ImageCarousel />
        </div>
        {/* <ImageCarousel /> */}
        <TodaysSpecialSection />
        <DineIn />
        <ReviewSection />
      </main>

      <HomeFooter />
    </div>
  );
};

export default HomePage;
