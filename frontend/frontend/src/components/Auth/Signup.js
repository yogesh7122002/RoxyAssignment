import React, { useState } from 'react';
import authService from '../../services/authService';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('Normal User');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.signup({ name, email, password, address, role });
      console.log(response.data);
      // Handle signup success (e.g., redirect to login)
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Normal User">Normal User</option>
            <option value="Store Owner">Store Owner</option>
          </select>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
