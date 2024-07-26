import React from 'react';
import MoodTracker from '../components/MoodTracker';

const MoodTrackerPage = () => {
  return (
    <div className="mood-tracker-page">
      <h2>Mood Tracker</h2>
      <p>Track your mood over time and analyze patterns to understand how they correlate with your financial situation.</p>
      <MoodTracker />
    </div>
  );
};

export default MoodTrackerPage;
