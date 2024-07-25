import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

const signup = (userData) => {
  return axios.post(API_URL + 'signup', userData);
};

const login = (userData) => {
  return axios.post(API_URL + 'login', userData);
};

export default { signup, login };
