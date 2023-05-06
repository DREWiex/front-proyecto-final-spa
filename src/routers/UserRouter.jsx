import { Navigate, Outlet } from 'react-router-dom';

export const UserRouter = ({ user }) => {

    if(user.role == 'admin') return <Navigate to='/dashboard-admin' />; // condicional: si el role no es 'user', sale de la función

    if(user.role == undefined) return <Navigate to='/login' />;


    return (

        <Outlet /> // si 'user.role' es igual a 'user', entonces sí da acceso a los 'children' envueltos en 'UserRouter'

    );

};