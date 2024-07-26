import React, { useState, useEffect } from 'react';

const JournalEntryPage = () => {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [entry, setEntry] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    setEntries([...entries, { date, entry }]);
    setEntry('');
  };

  return (
    <div className="journal-entry-page">
      <h2>Journal Entry</h2>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          rows="5"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>
      <div>
        <h3>Previous Entries</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Entry</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.entry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JournalEntryPage;
