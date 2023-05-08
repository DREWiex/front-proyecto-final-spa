import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../api/fetch';
import { reservationByID, reservationsError, userReservations, onLoadingReservations } from '../../store/slices';

export const useReservationsStore = () => {

    const {
        reservations,
        reservation, // estado que utilizo para el update
        error,
        loadingReservations
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


    const getReservationByID = async (id) => {

        dispatch(onLoadingReservations())

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/${id}`;

        try {
            
            const fetch = await fetchData(url);

            if(fetch.ok){

                const { data } = fetch;

                dispatch(reservationByID(data));
                
            } else {

                const { error } = fetch;

                throw error;

            };

        } catch (error) {
            
            dispatch(reservationsError(error));

        };

    }; //!FUNC-GETRESERVATIONBYID


    const addReservation = async (body) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations`;

        try {
            
            const fetch = await fetchData(url, 'POST', body);

            if(!fetch.ok){

                const { error } = fetch;

                throw error;

            } else {

                const { user_id } = body; // destructuración de la propiedad 'user_id' del objeto 'body' recibido por argumento

                getUserReservations(user_id); // una vez se cree la reserva, se actualiza el estado y se renderiza

            }

        } catch (error) {
            
            dispatch(reservationsError(error));

        };

    }; //!FUNC-ADDRESERVATION


    const deleteReservation = async (reservation_id, user_id) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/${reservation_id}`;

        try {
            
            const fetch = await fetchData(url, 'DELETE');

            if(!fetch.ok){

                const { error } = fetch;

                throw error;

            } else {

                getUserReservations(user_id);

            };

        } catch (error) {

            dispatch(reservationsError(error));

        };

    }; //!FUNC-DELETERESERVATION


    const updateReservation = async (body) => {

        const { reservation_id, user_id } = body; // destructuración de las propiedades 'reservation_id' y 'user_id' del objeto 'body' recibido por argumento

        console.log(reservation_id, user_id)

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/${reservation_id}`;

        try {
            
            const fetch = await fetchData(url, 'PUT', body);

            console.log(fetch);

            if(!fetch.ok){

                const { error } = fetch;

                throw error;
            
            } else {

                getUserReservations(user_id); // una vez se cree la reserva, se actualiza el estado y se renderiza

            };

        } catch (error) {
            
            dispatch(reservationsError(error));

        };

    }; //!FUNC-UPDATERESERVATION


    return {
        reservations,
        reservation,
        error,
        loadingReservations,

        getUserReservations,
        getReservationByID,
        addReservation,
        deleteReservation,
        updateReservation
    };

};