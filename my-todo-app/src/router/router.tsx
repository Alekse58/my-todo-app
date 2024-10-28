import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from '@/pages/LoginPage';
import Index from '@/pages/HomePage';

import { ROUTES } from '@/blueprint/constante/routes.ts';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PAGE,
    element: <Index/>,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login/>,
  },
]);

export default router;
