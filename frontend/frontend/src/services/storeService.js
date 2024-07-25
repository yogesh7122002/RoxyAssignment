import axios from 'axios';

const API_URL = 'http://localhost:3000/store/';

const addStore = (storeData) => {
  return axios.post(API_URL + 'add-store', storeData);
};

const getStores = () => {
  return axios.get(API_URL + 'stores');
};

const submitRating = (ratingData) => {
  return axios.post(API_URL + 'submit-rating', ratingData);
};

export default { addStore, getStores, submitRating };
