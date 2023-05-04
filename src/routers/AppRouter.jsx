import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../admin/pages/DashboardPage';
import { LoginPage, RegisterPage } from '../auth/pages';
import { HomePage, RoomDetailPage } from '../home/pages';

export const AppRouter = () => {


  return (

    <Routes>

      <Route path='/login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

      <Route path='/' element={<HomePage />} />
      <Route path='/room/:id' element={<RoomDetailPage />} />

      <Route path={'/*'} element={<Navigate to='/' />} />


      {/* {
         status !== 'authenticated' ? (

          <Route path='/' element={<LoginPage />} />,
          <Route path='register' element={<RegisterPage />} />,
          <Route path={'/*'} element={<Navigate to='/' />} />

        ) : (

          <Route path='home' element={<HomePage />} />,

          <Route path='dashboard-admin' element={<DashboardPage />} />,

          <Route path={'/*'} element={<Navigate to='/' />} />
          
        )
      } */}

    </Routes>

  );

};