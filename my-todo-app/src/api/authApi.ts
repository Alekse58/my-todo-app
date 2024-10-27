// src/api/authApi.ts
import axios from './api';

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await axios.post('/login/', data);
  return response.data;
};
