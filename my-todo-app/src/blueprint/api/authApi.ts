import axios from './api.ts';

interface ILoginData {
  email: string;
  password: string;
}

export const login = async (data: ILoginData) => {
  const response = await axios.post('/login/', data);

  localStorage.setItem('access', response.data.token);
  localStorage.setItem('refresh', response.data.refresh);

  return response.data;
};
