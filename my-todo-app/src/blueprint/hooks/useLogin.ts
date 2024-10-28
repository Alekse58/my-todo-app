import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@/store/authStore.ts';

import { login } from '@/blueprint/api/authApi.ts';

import { ROUTES } from '@/blueprint/constante/routes.ts';

const useLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');

    try {
      const data = await login({ email, password });

      setToken(data.token);
      navigate(ROUTES.HOME_PAGE);
    } catch {
      setError('Ошибка входа. Проверьте данные.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleLogin,
  };
};

export default useLogin;
