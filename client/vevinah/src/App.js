import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Orders from './components/Orders';
import SignIn from './components/SignIn';
import Register from './components/SignUp';
import PaymentPage from './components/PaymentPage';
import TrackingPage from './components/TrackingPage';
import HomePage from './components/HomePage';
<<<<<<< HEAD
=======
import Footer from './components/Footer';
>>>>>>> b6e293c193ad4d6fe7af9e99d997256fb23bbced
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
=======
        <Route path="/navbar" element={<Navbar />} />
>>>>>>> b6e293c193ad4d6fe7af9e99d997256fb23bbced
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Orders />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
