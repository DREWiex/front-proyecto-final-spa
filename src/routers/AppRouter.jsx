import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { HomePage } from '../home/pages/HomePage';
import { LoginPage, RegisterPage } from '../auth/pages';
import Cookies from 'universal-cookie';

export const AppRouter = () => {

  const cookies = new Cookies();

  const token = cookies.get('token');


  return (

    <Routes>

      <Route path='/' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

      <Route path='home' element={<HomePage />} />

      <Route path='dashboard-admin' element={<DashboardPage />} />


      <Route path='/*' element={<Navigate to='/' />} />

    </Routes>

  );

};