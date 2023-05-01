import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { AuthPage } from '../auth/pages/AuthPage';
import { HomePage } from '../home/pages/HomePage';

export const AppRouter = () => {


  return (

    <Routes>

        <Route path='/' element={<Navigate to='login' />} />
        <Route path='login' element={<AuthPage />} />
        <Route path='register' element={<AuthPage />} />
        {/* <Route path='password' /> */}

        {/* <Route path='home' element={<HomePage />} />
        <Route path='salas' />
        <Route path='sala/:id' />
        <Route path='reservas' />
        <Route path='reserva/:id' />
        <Route path='contacto' />

        <Route path='dashboard-admin' element={<DashboardPage />} />
        <Route path='dashboard-admin/usuarios' />
        <Route path='dashboard-admin/salas' />
        <Route path='dashboard-admin/reservas' /> */}


        <Route path='/*' element={<Navigate to='/' />} />

    </Routes>

  );

};