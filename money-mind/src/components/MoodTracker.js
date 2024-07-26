import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  return (
    <div className="mood-tracker">
      <h2>How are you feeling today?</h2>
      <input
        type="text"
        placeholder="Describe your mood"
        value={mood}
        onChange={handleMoodChange}
      />
    </div>
  );
};

export default MoodTracker;
