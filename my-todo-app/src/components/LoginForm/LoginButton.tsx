import React from 'react';

import { Button } from '@/components/ui/button';

interface ILoginButtonProps {
  isLoading: boolean;
}

const LoginButton = ({ isLoading }: ILoginButtonProps) => (
  <Button
    type='submit'
    className='w-full bg-blue-500 text-white hover:bg-blue-600'
    disabled={ isLoading }
  >
    {isLoading ? 'Загрузка...' : 'Войти'}
  </Button>
);

export default LoginButton;
