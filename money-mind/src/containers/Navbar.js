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
        <li><Link to="/FinancialRecoveryProgram">FinancialRecoveryProgram</Link></li>
        <li><Link to="/sms-tracker">SMS Tracker</Link></li>
        <li><Link to="/journal-entry">Journal Entry</Link></li>
        <li><Link to="/Pricing">Pricing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
