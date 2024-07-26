// src/components/UserRegistration.js
import React, { useState } from 'react';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // register user API call
  };

  return (
    <div className="user-registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;