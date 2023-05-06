import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { useAuthStore } from "../auth/hooks/useAuthStore";

export const PublicRouter = () => {

    const { user, checkRole } = useAuthStore();

    useEffect(() => {

        checkRole()

    }, []);


    return (

        <>

            {
                !user.role && <Outlet /> // condicional: si el role es 'undefined', entonces sí da acceeso a los 'children' envueltos en 'PublicRouter'
            }

        </>


    );

};