import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleMoodSubmit = () => {
    // Simple response logic based on mood input
    if (mood.toLowerCase().includes('happy')) {
      setResponse('Glad to hear you are happy!');
    } else if (mood.toLowerCase().includes('sad')) {
      setResponse('Sorry to hear you are sad. Here to support you!');
    } else {
      setResponse('Thank you for sharing your mood.');
    }
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <input
        type="text"
        value={mood}
        onChange={handleMoodChange}
        placeholder="How are you feeling today?"
      />
      <button onClick={handleMoodSubmit}>Submit</button>
      <p>{response}</p>
    </div>
  );
};

export default MoodTracker;
