import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetch';
import { reservationsError, userReservations } from '../../store/slices';

export const useReservationsStore = () => {

    const {
        reservations,
        error
    } = useSelector(state => state.reservations);

    const dispatch = useDispatch();


    const getUserReservations = async (id) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/search/user/${id}`;

        try {
            
            const fetch = await fetchData(url);

            if(fetch.ok){

                const { data } = fetch; // destructuración de la propiedad 'data' del objeto que devuelve el fetch en caso de que la propiedad 'ok' sea 'true'

                dispatch(userReservations(data));

            } else {

                const { error } = fetch; // destructuración de la propiedad 'error' del objeto que devuelve el fetch en caso de que la propiedad 'ok' sea 'false'

                throw error;

            };

        } catch (error) {
            
            dispatch(reservationsError(error));

        };

    }; //!FUNC-GETUSERRESERVATIONS


    const addReservation = async (body) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations`;

        try {
            
            const fetch = await fetchData(url, 'POST', body);

            if(!fetch.ok){

                const { error } = fetch;

                throw error;

            };

        } catch (error) {
            
            dispatch(reservationsError(error));

        };

    }; //!FUNC-ADDRESERVATION


    return {
        reservations,
        error,

        getUserReservations,
        addReservation
    };

};