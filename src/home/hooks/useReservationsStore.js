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


    /**
     * Obtener por ID de un usuario todas las reservas de la base de datos.
     * @function getUserReservations
     * @async
     * @param {String} id ID del usuario.
     */
    const getUserReservations = async (id) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/search/user/${id}`; // URL que recibe la API a través del fetch

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


    /**
     * Obtener por ID una reserva de la base de datos.
     * @function getReservationByID
     * @async
     * @param {String} id ID de la reserva.
     */
    const getReservationByID = async (id) => {

        dispatch(onLoadingReservations())

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/${id}`; // URL que recibe la API a través del fetch

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


    /**
     * Crear reserva en la base de datos
     * @function addReservation
     * @async
     * @param {Object} body Datos recibidos del formulario de  reservas
     */
    const addReservation = async (body) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations`; // URL que recibe la API a través del fetch

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


    /**
     * Eliminar por ID una reserva en la base de datos.
     * @function deleteReservation
     * @async
     * @param {String} reservation_id ID de la reserva.
     * @param {String} user_id ID del usuario.
     */
    const deleteReservation = async (reservation_id, user_id) => {

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/${reservation_id}`; // URL que recibe la API a través del fetch

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


    /**
     * Editar/actualizar por ID una reserva en la base de datos.
     * @function updateReservation
     * @async
     * @param {Object} body Datos recibidos del formulario de editar reservas
     */
    const updateReservation = async (body) => {

        const { reservation_id, user_id } = body; // destructuración de las propiedades 'reservation_id' y 'user_id' del objeto 'body' recibido por argumento

        const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/reservations/${reservation_id}`; // URL que recibe la API a través del fetch

        try {
            
            const fetch = await fetchData(url, 'PUT', body);

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