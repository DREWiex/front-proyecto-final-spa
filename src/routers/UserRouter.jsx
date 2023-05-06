import { Navigate, Outlet } from 'react-router-dom';

export const UserRouter = ({ user }) => {

    if(!user.role || user.role != 'user') return <Navigate to='/login' /> // condicional: si 'user.role' es cualquiera menos 'user', redirige a la página del login


  return (

    <Outlet /> // si 'user.role' es igual a 'user', entonces sí da acceeso a los 'children' envueltos en 'UserRouter'

  );

};