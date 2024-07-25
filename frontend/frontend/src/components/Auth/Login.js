import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login({ email, password });
      console.log(response.data);
      // Handle login success (e.g., store user data, redirect)
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignupNavigation = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleSignupNavigation}>Go to Signup</button>
    </div>
  );
};

export default Login;
