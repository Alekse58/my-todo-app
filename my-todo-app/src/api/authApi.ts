// src/api/authApi.ts
import axios from './api';

interface LoginData {
  email: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await axios.post('/login/', data);

  localStorage.setItem('access', response.data.token);  // Сохранение access токена
  localStorage.setItem('refresh', response.data.refresh); // Сохранение refresh токена

  return response.data;
};
