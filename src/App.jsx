// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';

// Define the App component
function App() {
  return (
    <Router> {/* Wrap the entire application with Router component */}
      <Dashboard />
    </Router>
  );
}

// Export the App component
export default App;
