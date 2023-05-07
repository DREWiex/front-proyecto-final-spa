import { useDispatch, useSelector } from "react-redux";
import { authError, onAuth, onLogout, setError, startLoadingAuth } from "../../store/slices";
import { fetchData } from "../../api/fetch";
import { clearLocal, getLocal, removeCookies, setCookies, setLocal } from '../../helpers';

export const useAuthStore = () => {

    const {
        user,
        error,
        isLoading
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();


    /**
     * Gestionar tanto el login como el registro de usuarios.
     * @function auth
     * @async
     * @param {String} url URL que recibe el fetch.
     * @param {String} method Método que recibe el fetch
     * @param {Object} body Objeto que recibe el fetch
     */
    const auth = async (url, method, body) => {

        dispatch(startLoadingAuth());

        try {
            
            const response = await fetchData(url, method, body);

            if(response.ok){

                const { data, token } = response;

                setCookies('token', token, { // guarda el 'token' (String) del usuario en una cookie
                    path: '/',
                    maxAge: 60 * 60 * 24, // expiración: 1 día
                    secure: true,
                    sameSite: 'lax'
                });

                const { avatar, first_name, last_name, role, user_id } = data; // destructuración del objeto 'data' con los datos "no sensibles" del usuario que se guardarán en el localStorage
    
                setLocal('user', { avatar, first_name, last_name, role, user_id }); // guardar el objeto con los datos "no sensible" del usuario en el localStorage
    
                dispatch(onAuth(data));

            } else {

                const { error } = response; // destructuración de la propiedad 'error' del objeto que devuelve el fetch

                throw error; // se envía el array con los errores al catch

            };

        } catch (error) {
            
            dispatch(authError(error));

        };

    }; //!FUNC-AUTH


    const logout = () => {

        dispatch(startLoadingAuth());

        removeCookies('token'); // eliminar el token de la cookie

        clearLocal(); // eliminar el objeto del usuario del localStorage

        dispatch(onLogout()); // restaurar los valores de las propiedades del 'initialSate'

    }; //!FUNC-LOGOUT


    /**
     * Comprobar el role según los datos guardados en el localStorage.
     * @function checkRole
     */
    const checkRole = () => {

        dispatch(startLoadingAuth());

        const data = getLocal('user'); // obtener el objeto con los datos del usuario guardado en el localStorage

        dispatch(onAuth(data)); // asignar a las propiedades del slice los valores obtenidos del objeto del usuario

    }; //!FUNC-CHECKROLE


    const clearError = () => {

        dispatch(setError());

    }; //!FUNC-SETERROR


    return {
        user,
        error,
        isLoading,

        auth,
        logout,
        checkRole,
        clearError
    };

};