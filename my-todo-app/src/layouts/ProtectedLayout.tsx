import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@/store/authStore';

const ProtectedLayout = () => {
  const isAuthenticated = useAuthStore((state) => !!state.token);

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;
