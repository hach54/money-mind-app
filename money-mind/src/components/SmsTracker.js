import React, { useState } from 'react';
import '../styles/SmsTracker.css';

const SmsTracker = () => {
  const [smsContent, setSmsContent] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleSmsInputChange = (e) => {
    setSmsContent(e.target.value);
  };

  const analyzeSmsContent = () => {
    // Simulate a basic analysis
    const lowercasedContent = smsContent.toLowerCase();
    
    // A simple example of detecting suspicious keywords
    if (lowercasedContent.includes('http') || lowercasedContent.includes('click here') || lowercasedContent.includes('urgent')) {
      setAnalysisResult('Potential threat detected: The SMS contains suspicious links or phrases.');
    } else {
      setAnalysisResult('No immediate threat detected, but stay cautious.');
    }
  };

  return (
    <div className="sms-tracker-container">
      <h2>SMS Tracker</h2>
      <p>
        Use this tool to analyze suspicious SMS messages or links for potential phishing or hacker activity.
        Be sure to verify any suspicious messages before clicking on any links.
      </p>

      {/* Input Section */}
      <textarea
        value={smsContent}
        onChange={handleSmsInputChange}
        placeholder="Paste the SMS content or link here"
        rows="4"
        className="sms-input"
      />

      {/* Analyze Button */}
      <button onClick={analyzeSmsContent} className="analyze-button">
        Analyze SMS
      </button>

      {/* Display Result */}
      {analysisResult && (
        <div className={`analysis-result ${analysisResult.includes('threat') ? 'threat-detected' : 'no-threat'}`}>
          <p>{analysisResult}</p>
        </div>
      )}
    </div>
  );
};

export default SmsTracker;
