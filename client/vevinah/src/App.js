import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Orders from './components/Orders';
import SignIn from './components/SignIn';
import Register from './components/SignUp';
import PaymentPage from './components/PaymentPage';
import TrackingPage from './components/TrackingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Orders />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path='/create_account' element={<create_account />} />
      </Routes>
    </Router>
  );
}

export default App;
