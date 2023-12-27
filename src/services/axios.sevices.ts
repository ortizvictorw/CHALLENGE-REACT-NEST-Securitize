import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API ,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiService;
