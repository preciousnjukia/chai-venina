// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import CartPage from './components/CartPage';

function App() {
  return (
    <Router>
      <CartPage />
    </Router>
  );
}

export default App;
