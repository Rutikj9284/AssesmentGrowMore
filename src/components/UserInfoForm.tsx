import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styling/userInfo.css";

const UserInfoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user details in local storage
    localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
    // Route to the second page
    navigate('/second-page');
  };

  return (
    <div className='align-center bg'>
      <h2>User Information Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfoForm;
