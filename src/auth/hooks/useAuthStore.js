import { useDispatch, useSelector } from "react-redux";
import { startLoadingAuth } from "../../store/slices";
import { authFetch } from "../../api/authFetch";

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
            
            const cosa = await authFetch(url, method, body);

            console.log(cosa);

        } catch (error) {
            
            throw error;

        };

    }; //!FUNC-LOGIN


    return {
        user,
        role,
        error,
        isLoading,

        login
    };

};