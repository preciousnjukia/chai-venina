import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import SignIn from './components/SignIn';
import Register from './components/SignUp';
import PaymentPage from './components/PaymentPage';
import TrackingPage from './components/TrackingPage';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
