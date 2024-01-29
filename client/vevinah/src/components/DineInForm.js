import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Logo from "../assets/logo.png";
// import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SignUp() {
  let currentDateTime = new Date().toJSON();
  const [formData, setFormData] = useState({
    date_time: currentDateTime,
    guest_number: "2",
    reservation_notes: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emptyField = Object.keys(formData).find(
      (key) => !formData[key].trim()
    );

    if (emptyField) {
      alert(`Please enter a valid ${emptyField}`);
      return;
    }

    // console.log(formData)
    fetch("http://127.0.0.1:5555/dine-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((r) => {
        alert(`Reservation Submitted`);
        navigate("/", { replace: true });
      });
  }

  return (
    <div>
      <Navbar />
      <div className="login-dialogue">
        <div className="app-title">{/* <h1>Reservation</h1> */}</div>

        {/* <img className="logo" alt="logo" src={Logo} /> */}
        <div className="form-dialogue">
          <form onSubmit={handleSubmit}>
            <h2>Reservation</h2>

            <div className="form-item">
              <label htmlFor="date"> Reservation Date:</label>
              <input
                type="datetime-local"
                id="date_time"
                value={formData.date_time}
                autoComplete="off"
                onChange={handleChange}
                min={currentDateTime}
                max="2024-07-14T00:00"
              />
            </div>
            <div className="form-item">
              <label htmlFor="guest_number"> Number of Guests:</label>
              <input
                type="number"
                min="1"
                id="guest_number"
                value={formData.guest_number}
                autoComplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="reservation_notes"> Notes:</label>
              <input
                type="text"
                id="reservation_notes"
                value={formData.reservation_notes}
                onChange={handleChange}
              />
            </div>

            <button className="login-btn" type="submit">
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
