import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from '@/pages/MainPage';
import Login from '@/pages/LoginPage';
import ProtectedLayout from '@/layouts/ProtectedLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={ <Login /> } />
        <Route element={ <ProtectedLayout /> }>
          <Route path='/' element={ <Main /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
