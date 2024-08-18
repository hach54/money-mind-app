import React, { useState, useEffect } from 'react';
import '../styles/JournalEntryPage.css';

const JournalEntryPage = () => {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [entry, setEntry] = useState('');
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    if (!entry.trim()) {
      alert('Please write something before adding an entry!');
      return;
    }

    setEntries([...entries, { date, entry }]);
    setEntry('');
  };

  const filteredEntries = entries.filter(
    (e) => e.entry.toLowerCase().includes(searchTerm.toLowerCase()) || e.date.includes(searchTerm)
  );

  return (
    <div className="journal-entry-page">
      <h2>Journal Entry</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search entries by date or text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* New Entry Form */}
      <div className="entry-form">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          rows="5"
          value={entry}
          placeholder="Write your journal entry here..."
          onChange={(e) => setEntry(e.target.value)}
        />
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>

      {/* Previous Entries */}
      <div className="entries-list">
        <h3>Previous Entries</h3>
        {filteredEntries.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Entry</th>
              </tr>
            </thead>
            <tbody>
              {filteredEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.entry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No entries found.</p>
        )}
      </div>
    </div>
  );
};

export default JournalEntryPage;
