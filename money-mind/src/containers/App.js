import React from 'react';
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
import RehabilitationPage from '../pages/RehabilitationPage';
import SmsTrackerPage from '../pages/SmsTrackerPage';
import JournalEntryPage from '../pages/JournalEntryPage';
import AffordabilityPage from '../pages/AffordabilityPage';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/register" element={<UserRegistrationPage />} />
          <Route path="/mood-tracker" element={<MoodTrackerPage />} />
          <Route path="/budget-tracker" element={<BudgetTrackerPage />} />
          <Route path="/financial-therapy" element={<FinancialTherapyPage />} />
          <Route path="/rehabilitation" element={<RehabilitationPage />} />
          <Route path="/sms-tracker" element={<SmsTrackerPage />} />
          <Route path="/journal-entry" element={<JournalEntryPage />} />
          <Route path="/affordability" element={<AffordabilityPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
