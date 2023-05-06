import { Navigate, Outlet } from 'react-router-dom';

export const AdminRouter = ({ user }) => {

    console.log('ENTRO A ADMIN ROUTER')

    if(!user.role || user.role != 'admin') return <Navigate to='/login' /> // condicional: si 'user.role' es cualquiera menos 'admin', redirige a la página del login


  return (

    <Outlet /> // si 'user.role' es igual a 'admin', entonces sí da acceeso a los 'children' envueltos en 'AdminRouter'

  );

};