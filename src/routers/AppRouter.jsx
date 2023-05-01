import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { AuthPage } from '../auth/pages/AuthPage';
import { HomePage } from '../home/pages/HomePage';

export const AppRouter = () => {


  return (

    <Routes>

        <Route path='/' element={<AuthPage />} /> 

        <Route path='/home' element={<HomePage />} />

        <Route path='/dashboard-admin' element={<DashboardPage />} />

    </Routes>

  );

};