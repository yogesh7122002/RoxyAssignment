import axios from 'axios';

const API_URL = 'http://localhost:3000/user/';

const addUser = (userData) => {
  return axios.post(API_URL + 'add-user', userData);
};

const getUsers = () => {
  return axios.get(API_URL + 'users');
};

const changePassword = (passwordData) => {
  return axios.post(API_URL + 'change-password', passwordData);
};

export default { addUser, getUsers, changePassword };
