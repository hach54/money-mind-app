import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/app.css';
import '../styles/components.css';
import '../styles/global.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import HomePage from '../pages/HomePage';
import UserRegistrationPage from '../pages/UserRegistrationPage';
import MoodTrackerPage from '../pages/MoodTrackerPage';
import BudgetTrackerPage from '../pages/BudgetTrackerPage';
import FinancialTherapyPage from '../pages/FinancialTherapyPage';
import FinancialRecoveryProgramPage from '../pages/FinancialRecoveryProgramPage';
import SmsTrackerPage from '../pages/SmsTrackerPage';
import JournalEntryPage from '../pages/JournalEntryPage';
import PricingPage from '../pages/PricingPage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    setUser(userData);
  };

  return (
    <div className="app-container">
      <Header user={user} />
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage user={user} />} />
          <Route path="/register" element={<UserRegistrationPage onRegister={handleRegister} />} />
          <Route path="/mood-tracker" element={<MoodTrackerPage />} />
          <Route path="/budget-tracker" element={<BudgetTrackerPage />} />
          <Route path="/financial-therapy" element={<FinancialTherapyPage />} />
          <Route path="/FinancialRecoveryProgram" element={<FinancialRecoveryProgramPage />} />
          <Route path="/sms-tracker" element={<SmsTrackerPage />} />
          <Route path="/journal-entry" element={<JournalEntryPage />} />
          <Route path="/Pricing" element={<PricingPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
