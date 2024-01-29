// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import SignIn from './components/SignIn';
import Register from './components/SignUp';
import PaymentPage from './components/PaymentPage';
import TrackingPage from './components/TrackingPage';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import DineInForm from './components/DineInForm';



function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu onAddToCart={onAddToCart} cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/dine-in" element={<DineInForm/>} />


      </Routes>
    </Router>
  );
}

export default App;

