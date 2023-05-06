import { Navigate, Outlet } from 'react-router-dom';

export const AdminRouter = ({ user }) => {

    if(user.role == 'user') return <Navigate to='/' />;

    if(user.role == undefined) return <Navigate to='/login' />;


    return (

        <Outlet /> // si 'user.role' es igual a 'admin', entonces sí da acceso a los 'children' envueltos en 'AdminRouter'

    );

};