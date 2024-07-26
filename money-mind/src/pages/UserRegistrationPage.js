import React, { useState } from 'react';

function UserRegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Register user logic here
  };

  return (
    <div className="user-registration-page">
      <h1>User Registration</h1>
      <p>Create an account to access our features.</p>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default UserRegistrationPage;