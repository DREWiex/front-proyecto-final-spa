import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { useEffect } from 'react';

export const AdminRouter = () => {

    const { user, checkRole } = useAuthStore();

    useEffect(() => {

        checkRole()

    }, []);

    if (user.role != 'admin') return <Navigate to='/login' /> // condicional: si el role no es 'admin', redirige a la página del login


    return (

        <Outlet /> // si 'user.role' es igual a 'admin', entonces sí da acceso a los 'children' envueltos en 'AdminRouter'

    );

};