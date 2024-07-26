import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        <li><Link to="/budget-tracker">Budget Tracker</Link></li>
        <li><Link to="/financial-therapy">Financial Therapy</Link></li>
        <li><Link to="/rehabilitation">Rehabilitation</Link></li>
        <li><Link to="/sms-tracker">SMS Tracker</Link></li>
        <li><Link to="/journal-entry">Journal Entry</Link></li>
        <li><Link to="/affordability">Affordability</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
