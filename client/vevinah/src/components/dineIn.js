import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { Link } from "react-router-dom";


const DineIn = () => {
  return (
    <div className="dine-in-section">
      <div className="video-card">
        <iframe
          title="Restaurant Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_l_8mjVXEs0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="dine-in-description">
        <FontAwesomeIcon icon={faUtensils} className="utensils" />
        <h2>DINE IN</h2>
        <p>
          Savor the essence of culinary bliss in our cozy ambiance. Join us for
          an unforgettable DINE IN experience!
        </p>
        <Link to="/dine-in">
          <button className="reservation-button"> Book a reservation</button>
        </Link>
      </div>
    </div>
  );
};

export default DineIn;
