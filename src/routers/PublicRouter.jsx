import { Navigate, Outlet } from 'react-router-dom';

/**
 * Controlar el acceso a las rutas públicas cuando el role es 'undefined'.
 * @function PublicRouter
 * @param {Object} user Recibe las propiedades con los datos del usuario. 
 */
export const PublicRouter = ({ user }) => {

    if(user.role == 'user') return <Navigate to='/' />; // condicional: si el role es 'user', redirige al índex del 'user'

    if(user.role == 'admin') return <Navigate to='/dashboard-admin' />; // condicional: si el role es 'admin', redirige al dashboard del 'admin'


    return (

        <Outlet /> // si el role es 'undefined', entonces sí da acceso a los 'children' envueltos en 'PublicRouter'

    );

};