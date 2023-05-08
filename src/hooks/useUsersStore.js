import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../api/fetch';
import { onLoading, setUsers, usersError } from '../store/slices';

export const useUsersStore = () => {

    const {
        user,
        error,
        isLoading
    } = useSelector(state => state.users);

    const dispatch = useDispatch();


    const getUsers = async () => {

        dispatch(onLoading());

        try {

            const fetch = await fetchData(`${import.meta.env.VITE_API_URL_BASE}/api/v1/users`);

            if(fetch.ok){

                const { data } = fetch;

                dispatch(setUsers(data));

            } else {

                const { error } = fetch;

                throw error;

            };

        } catch (error) {

            dispatch(usersError(error));

        };

    }; //!FUNC-GETUSERS


    const addUser = async (body) => {

        dispatch(onLoading());

        try {
            
            const fetch = fetchData(`${import.meta.env.VITE_API_URL_BASE}/api/v1/users`, 'POST', body); // crear un nuevo usuario

            if(!fetch.ok){

                const { error } = fetch;

                throw error;

            };

        } catch (error) {
            
            dispatch(usersError(error));

        };

    } //!FUNC-ADDUSER


    const deleteUser = async (id) => {

        dispatch(onLoading());
        
        try {
            
            const fetch = await fetchData(`${import.meta.env.VITE_API_URL_BASE}/api/v1/users/${id}`, 'DELETE'); // eliminar el usuario por ID

            if(fetch.ok){

                const { data } = await fetchData(`${import.meta.env.VITE_API_URL_BASE}/api/v1/users`); // obtener el objeto de usuarios actualizado

                dispatch(setUsers(data));

            } else {

                const { error } = fetch;

                throw error;

            };

        } catch (error) {
            
            dispatch(usersError(error));

        };

    }; //!FUNC-DELETEUSER


    return {
        user,
        error,
        isLoading,

        getUsers,
        addUser,
        deleteUser
    };

};