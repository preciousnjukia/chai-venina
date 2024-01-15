import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import TrackingPage from './components/TrackingPage';
import Menu from './components/Menu';
import CartPage from './components/Orders'; // Assuming this is the correct component
import SignIn from './components/SignIn';
import Register from './components/SignUp';
import create_account from './components/Sign_In_Up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path='/create_account' element={<create_account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
