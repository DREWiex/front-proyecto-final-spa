import { Navigate, Outlet } from 'react-router-dom';

/**
 * Controlar el acceso a las rutas privadas del role 'admin'.
 * @function AdminRouter
 * @param {Object} user Recibe las propiedades con los datos del usuario.
 */
export const AdminRouter = ({ user }) => {

    if(user.role == 'user') return <Navigate to='/' />; // condicional: si el role es 'user', redirige al índex del 'user'

    if(!user.role) return <Navigate to='/login' />; // condicional: si el role es 'undefined', redirige a la página del login


    return (

        <Outlet /> // si el role es 'admin', entonces sí da acceso a los 'children' envueltos en 'AdminRouter'

    );

};