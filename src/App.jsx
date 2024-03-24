// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import TopbarAdmin from './components/TopbarAdmin/index.jsx'
import Navbar from './components/Navbar.jsx'


// Define the App component
function App() {
  return (
    <Router> {/* Wrap the entire application with Router component */}
      <Navbar />
      <TopbarAdmin />
      <Dashboard />
    </Router>
  );
}

// Export the App component
export default App;
