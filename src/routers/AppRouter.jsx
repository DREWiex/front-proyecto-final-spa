import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { LoginPage, RegisterPage } from '../auth/pages';
import { HomePage, RoomDetailPage } from '../home/pages';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { useEffect } from 'react';
import { AdminRouter, PublicRouter, UserRouter } from '../routers';

export const AppRouter = () => {

  const { user, checkRole } = useAuthStore();

  useEffect(() => {

    console.log('USE EFFECT')

    checkRole()

  }, []);


  return (

    <Routes>

      {/* RUTAS PÚBLICAS */}

      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

      <Route path={'/*'} element={<Navigate to='/login' />} />

      {/* RUTAS PRIVADAS */}

      {/* USERS */}

      <Route element={<UserRouter />}>

        <Route path='/' element={<HomePage />} />
        <Route path='room/:id' element={<RoomDetailPage />} />

        <Route path={'/*'} element={<Navigate to='/' />} />

      </Route>

      {/* ADMIN */}

      <Route element={<AdminRouter />} >

        <Route path='dashboard-admin' element={<DashboardPage />} />

        <Route path={'/*'} element={<Navigate to='/dashboard-admin' />} />

      </Route>

    </Routes>

  );

};