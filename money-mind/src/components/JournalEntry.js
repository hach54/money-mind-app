import React, { useState } from 'react';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  return (
    <div className="journal-entry">
      <h2>Journal Entry</h2>
      <textarea
        placeholder="Write down your thoughts and reflections..."
        value={entry}
        onChange={handleEntryChange}
      ></textarea>
    </div>
  );
};

export default JournalEntry;
