import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { useEffect } from 'react';

export const UserRouter = () => {

    const { user, checkRole } = useAuthStore();

    useEffect(() => {

        checkRole()

    }, []);

    if(user.role != 'user') return <Navigate to='/login' /> // condicional: si el role no es 'user, redirige a la página del login


    return (

        <Outlet /> // si 'user.role' es igual a 'user', entonces sí da acceso a los 'children' envueltos en 'UserRouter'

    );

};