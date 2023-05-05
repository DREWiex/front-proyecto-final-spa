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
    
                setLocal('user', data); // guarda el objeto con los datos del usuario en el localStorage
    
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


    const checkRole = () => {

        dispatch(startLoadingAuth());

        const data = getLocal('user');

        dispatch(onAuth(data));

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