import { useDispatch, useSelector } from "react-redux";
import { authLogin, clearError, errorAuth, onLogout, startLoadingAuth } from "../../store/slices";
import { fetchData } from "../../api/fetch";
import { clearLocal, getLocal, removeCookies, setCookies, setLocal } from '../../helpers'

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

                setCookies('token', token); // guarda el 'token' (String) del usuario en una cookie
    
                setLocal('user', data); // guarda el objeto con los datos del usuario en el localStorage
    
                dispatch(authLogin(data));

            } else {

                const { errors } = fetch;

                throw errors;

            };

        } catch (error) {
            
            dispatch(errorAuth(error));

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

        dispatch(authLogin(data));

    }; //!FUNC-CHECKROLE


    const setError = () => {

        dispatch(clearError());

    }; //!FUNC-SETERROR


    return {
        user,
        error,
        isLoading,

        auth,
        checkRole,
        logout,
        setError
    };

};