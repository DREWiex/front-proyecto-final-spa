import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { LoginPage, RegisterPage } from '../auth/pages';
import { HomePage, RoomDetailPage } from '../home/pages';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { useEffect } from 'react';

export const AppRouter = () => {

  const { user, checkRole } = useAuthStore();

  useEffect(() => {

    checkRole()

  }, []);


  return (

    <Routes>

      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

      <Route path='/' element={<HomePage />} />
      <Route path='room/:id' element={<RoomDetailPage />} />

      <Route path='dashboard-admin' element={<DashboardPage />} />

      <Route path={'/*'} element={<Navigate to='/login' />} />

    </Routes>

  );

};