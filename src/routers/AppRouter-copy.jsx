import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { HomePage } from '../home/pages/HomePage';
import { LoginPage, RegisterPage } from '../auth/pages';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const AppRouter = () => {

  // const { user } = useContext(UserContext);

  // const { ok, data } = user;


  return (

    <Routes>

      {
        !ok && (
          <Route path='/' element={<LoginPage />} />,
          <Route path='register' element={<RegisterPage />} />,
          {/* <Route path='password' /> */}
        )
      }

      {
        ok && (data.role == 'user' || data.role == 'admin') (
          <Route path='home' element={<HomePage />} />,
          {/* <Route path='salas' />,
          <Route path='sala/:id' />,
          <Route path='reservas' />,
          <Route path='reserva/:id' />,
          <Route path='contacto' /> */}
        )
      }

      {
        ok && data.role == 'admin' && (
          <Route path='dashboard-admin' element={<DashboardPage />} />,
          {/* <Route path='dashboard-admin/usuarios' />,
          <Route path='dashboard-admin/salas' />,
          <Route path='dashboard-admin/reservas' /> */}
        )
      }


        <Route path='/*' element={<Navigate to='/' />} />

    </Routes>

  );

};