import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Orders from './components/Orders';
import TrackingPage from './components/TrackingPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/menu" activeClassName="active">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">Orders</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Orders />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
