import { useDispatch, useSelector } from "react-redux";
import { authLogin, errorAuth, startLoadingAuth } from "../../store/slices";
import { authFetch } from "../../api/authFetch";
import Cookies from 'universal-cookie';
import { getLocal, setLocal } from '../../helpers/localStorage';

export const useAuthStore = () => {

    const {
        user,
        error,
        isLoading
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();


    const login = async (url, method, body) => {

        dispatch(startLoadingAuth());

        try {
            
            const fetch = await authFetch(url, method, body);

            if(fetch.ok){

                const { data, token } = fetch;

                const cookies = new Cookies();
    
                cookies.set('token', token); // guarda el 'token' (String) del usuario en una cookie
    
                setLocal('user', data); // guarda el objeto con los datos del usuario en el localStorage
    
                dispatch(authLogin(data));

            } else {

                const { errors } = fetch;

                throw errors;

            };

        } catch (error) {
            
            dispatch(errorAuth(error));

        };

    }; //!FUNC-LOGIN


    const register = async (url, method, body) => {



    }; //!FUNC-REGISTER


    const checkRole = () => {

        dispatch(startLoadingAuth());

        const data = getLocal('user');

        dispatch(authLogin(data));

    }; //!FUNC-CHECKROLE


    return {
        user,
        error,
        isLoading,

        login,
        register,
        checkRole
    };

};