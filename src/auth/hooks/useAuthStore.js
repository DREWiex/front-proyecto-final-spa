import { useDispatch, useSelector } from "react-redux";
import { authLogin, startLoadingAuth } from "../../store/slices";
import { authFetch } from "../../api/authFetch";
import Cookies from 'universal-cookie';
import { setLocal } from '../../helpers/localStorage';

export const useAuthStore = () => {

    const {
        user,
        role,
        error,
        isLoading
    } = useSelector(state => state.auth);

    const dispatch = useDispatch();


    const login = async (url, method, body) => {

        dispatch(startLoadingAuth());

        try {
            
            const { data, token } = await authFetch(url, method, body);

            const cookies = new Cookies();

            cookies.set('token', token); // guarda el 'token' (String) del usuario en una cookie

            setLocal('user', data); // guarda el objeto con los datos del usuario en el localStorage

            dispatch(authLogin(data));

        } catch (error) {
            
            throw error;

        };

    }; //!FUNC-LOGIN


    const register = async (url, method, body) => {



    }; //!FUNC-REGISTER


    return {
        user,
        role,
        error,
        isLoading,

        login,
        register
    };

};