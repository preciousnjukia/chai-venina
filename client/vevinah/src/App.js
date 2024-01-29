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
<<<<<<< HEAD
import MpesaPaymentPage from './components/PaymentForm.js';  // Updated import
=======
import Cart from './components/Cart';
import DineInForm from './components/DineInForm';


>>>>>>> 1e6700c26f0b3650602c824815db7ec9790b5e1e

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
<<<<<<< HEAD
        <Route path="/mpesa-payment" element={<MpesaPaymentPage />} />  {/* Updated route */}
=======
        <Route path="/dine-in" element={<DineInForm/>} />


>>>>>>> 1e6700c26f0b3650602c824815db7ec9790b5e1e
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> 1e6700c26f0b3650602c824815db7ec9790b5e1e
