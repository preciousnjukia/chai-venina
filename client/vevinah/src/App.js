import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Orders from './components/Orders';
import SignIn from './components/SignIn';
import Register from './components/SignUp';
import PaymentPage from './components/PaymentPage';
import TrackingPage from './components/TrackingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/navbar" element={<Navbar />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Orders />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path='/create_account' element={<create_account />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
