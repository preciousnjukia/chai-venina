// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

import TrackingPage from './components/TrackingPage';

function App() {
  return (
    <Router>
      <TrackingPage />
    </Router>
  );
}

export default App;
