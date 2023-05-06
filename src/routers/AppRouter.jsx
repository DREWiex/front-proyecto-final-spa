import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { LoginPage, RegisterPage } from '../auth/pages';
import { HomePage, RoomDetailPage } from '../home/pages';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { useEffect } from 'react';
import { AdminRouter, PublicRouter, UserRouter } from '../routers';

export const AppRouter = () => {

  const { pathname } = useLocation(); // destructuración de la propiedad 'pathname' del hook 'useLocation' que recibe un string con el nombre de la ruta

  const { user, checkRole } = useAuthStore(); // destructuración de las propiedades 'user' y 'checkRole' del hook 'useAuthStore'

  useEffect(() => {

    checkRole() // obtener el objeto con los datos del usuario que está guardado en el localStorage y así pasárselo a través de 'user' como 'prop' a los distintos routers

  }, [pathname]); // propiedad 'pathname' como dependencia del 'useEffect' para que este se ejecute cada vez que la ruta cambie


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

        <Route path={'/*'} element={<Navigate to='/dashboard-admin' />} />

      </Route>

    </Routes>

  );

};