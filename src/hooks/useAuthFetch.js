import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { authFetch } from "../api/authFetch";

export const useAuthFetch = (url, method, body, status) => {

    const { user, setUser } = useContext(UserContext);

    const fetchingUser = async () => {

        const fetch = await authFetch(url, method, body);

        setUser(fetch);

    };

    useEffect(() => {

        status && fetchingUser(); // condicional: si 'status' es true, invoca la func del fetch

    }, [body])

    return user;

};