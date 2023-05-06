import { Navigate, Outlet } from 'react-router-dom';

export const PublicRouter = ({ user }) => {

    if(user.role == 'user') return <Navigate to='/' />;

    if(user.role == 'admin') return <Navigate to='/dashboard-admin' />;


    return (

        <Outlet /> // condicional: si el role es 'undefined', entonces sí da acceso a los 'children' envueltos en 'PublicRouter'

    );

};