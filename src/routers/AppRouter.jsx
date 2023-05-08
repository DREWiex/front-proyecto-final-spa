import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage, ReservationsPage, RoomsPage, UsersPage } from '../admin/pages';
import { LoginPage, RegisterPage } from '../auth/pages';
import { HomePage, RoomDetailPage } from '../home/pages';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { useEffect } from 'react';
import { AdminRouter, PublicRouter, UserRouter } from '../routers';

export const AppRouter = () => {

  const { user, checkRole } = useAuthStore(); // destructuración de las propiedades 'user' y 'checkRole' del hook 'useAuthStore'

  useEffect(() => {

    checkRole() // obtener el objeto con los datos del usuario que está guardado en el localStorage y así pasárselo a través de 'user' como 'prop' a los distintos routers

  }, []);


  return (

    <Routes>

      {/* RUTAS PÚBLICAS */}

      <Route element={<PublicRouter user={user} />}>

        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        <Route path={'/*'} element={<Navigate to='/login' />} />

      </Route>


      {/* RUTAS PRIVADAS */}

      {/* USERS */}

      <Route element={<UserRouter user={user} />}>

        <Route path='/' element={<HomePage />} />
        <Route path='room/:id' element={<RoomDetailPage />} />

        <Route path={'/*'} element={<Navigate to='/' />} />

      </Route>

      {/* ADMIN */}

      <Route element={<AdminRouter user={user} />} >

        <Route path='dashboard-admin' element={<DashboardPage />} />
        <Route path='dashboard-admin/users' element={<UsersPage />} />
        <Route path='dashboard-admin/rooms' element={<RoomsPage />} />
        <Route path='dashboard-admin/reservations' element={<ReservationsPage />} />

        <Route path={'/*'} element={<Navigate to='/dashboard-admin' />} />

      </Route>

    </Routes>

  );

};