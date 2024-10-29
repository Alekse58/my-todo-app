import React from 'react';

import useLogin from '@/blueprint/hooks/useLogin.ts';

import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';

const LoginPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleLogin,
  } = useLogin();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin();
  };

  const renderInput = (
    value: string,
    label: string,
    id: string,
    placeholder: string,
    onChange: (value: string) => void,
  ) => (
    <div className='flex flex-col gap-1'>
      <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <Input
        type={ id }
        id={ id }
        placeholder={ placeholder }
        value={ value }
        onChange={ (e) => onChange(e.target.value) }
        className='mt-1 text-gray-700 rounded-xl'
      />
    </div>
  );

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <form onSubmit={ onSubmit } className='bg-white p-8 shadow-md w-96 rounded-xl'>
        <h2 className='text-2xl font-bold text-gray-700 mb-6 text-center'>Вход</h2>
        {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}
        <div className='flex flex-col gap-5 mb-10'>
          {renderInput(email, 'Почта', 'email', 'Введите вашу почту', setEmail)}
          {renderInput(password, 'Пароль', 'password', 'Введите пароль', setPassword)}
        </div>
        <Button
          type='submit'
          className='w-full bg-blue-500 text-white hover:bg-blue-600 rounded-xl'
          disabled={ isLoading }
        >
          {isLoading ? 'Загрузка...' : 'Войти'}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
