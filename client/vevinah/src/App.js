// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <Orders />
    </Router>
  );
}

export default App;
