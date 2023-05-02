import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { authFetch } from "../api/authFetch";
import Cookies from 'universal-cookie';

/**
 * Hace la llamada al fetch tanto para el login como para el registro del usuario
 * @function fetchingUser
 * @async
 * @param {String} url URL que recibe el fetch
 * @param {String} method Método que recibe el fetch
 * @param {Object} body Datos del form que recibe el fetch
 * @param {Boolean} status Su valor depende del evento 'onSubmit'
 * @returns El estado 'user', que es el objeto con los datos que recibe del fetch
 */
export const useAuthFetch = (url, method, body, status) => {

    const cookies = new Cookies();

    const { user, setUser } = useContext(UserContext);

    const fetchingUser = async () => {

        const fetch = await authFetch(url, method, body); // invocación del fetch

        if(fetch.ok){

            setUser(fetch); // sobreescribe el estado con el objeto que recibe del fetch

            cookies.set('token', fetch.token);

        } else {

            setUser(fetch);

        };

    };

    useEffect(() => {

        status && fetchingUser(); // condicional: solo invoca al fetch si 'status' ('sent' en 'LoginPage' y 'RegisterPage') es true

    }, [body])

    return user;

};