import { Navigate, Outlet } from 'react-router-dom';

/**
 * Controlar el acceso a las rutas privadas del role 'user'.
 * @function UserRouter
 * @param {Object} user Recibe las propiedades con los datos del usuario. 
 */
export const UserRouter = ({ user }) => {

    if(user.role == 'admin') return <Navigate to='/dashboard-admin' />;  // condicional: si el role es 'admin', redirige al dashboard del 'admin'

    if(!user.role) return <Navigate to='/login' />; // condicional: si el role es 'undefined', redirige a la página del login


    return (

        <Outlet /> // si el role es 'user', entonces sí da acceso a los 'children' envueltos en 'UserRouter'

    );

};