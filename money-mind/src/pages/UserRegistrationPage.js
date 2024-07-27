import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegistrationPage = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const userData = { name, email, password, profileImage };
    onRegister(userData);
    navigate('/');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="registration-page">
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {profileImage && (
        <img src={profileImage} alt="Profile Preview" style={{ width: '100px', height: '100px' }} />
      )}
      <button onClick={handleRegister}>Register</button>
      <p>Welcome to MoneyMind! We're glad to have you.</p>
    </div>
  );
};

export default UserRegistrationPage;
