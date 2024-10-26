import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;