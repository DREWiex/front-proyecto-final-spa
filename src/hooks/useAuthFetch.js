import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { authFetch } from "../api/authFetch";

export const useAuthFetch = (url, method, body) => {

    const { user, setUser } = useContext(UserContext);

    const fetchingUser = async () => {

        const fetch = await authFetch(url, method, body);

        setUser(fetch);

    };

    useEffect(() => {

        fetchingUser();

    }, [body])

    return user;

};