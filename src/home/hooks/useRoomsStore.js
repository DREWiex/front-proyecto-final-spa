import { useDispatch, useSelector } from "react-redux";
import { setRoom, setRoomByID, startLoadingRoom } from "../../store/slices/roomSlice";
import { fetchData } from "../../api/fetch";

export const useRoomsStore = () => {

    const { room, isLoading } = useSelector(state => state.rooms);

    const dispatch = useDispatch();


    /**
     * Obtener todas las salas de estudio de la base de datos.
     * @function getRooms
     * @async
     * @param {String} url URL que recibe el fetch.
     */
    const getRooms = async (url) => {

        dispatch(startLoadingRoom());

        try {
            
            const { data } = await fetchData(url); // destructuración de la propiedad 'data' del objeto que devuelve el fetch

            dispatch(setRoom(data)); // sobreescribe el estado 'room' con los datos de las salas de estudio que contiene el objeto 'data'

        } catch (error) {

            throw error;

        };

    }; //!FUNC-GETROOMS

    
    /**
     * Obtener por ID una sala de estudio de la base de datos.
     * @function getRoomByID
     * @async
     * @param {String} url URL que recibe el fetch.
     */
    const getRoomByID = async (url) => {

        dispatch(startLoadingRoom());

        try {
            
            const { data } = await fetchData(url);  // destructuración de la propiedad 'data' del objeto que devuelve el fetch

            dispatch(setRoomByID(data)); // sobreescribe el estado 'room' con los datos de la sala de estudio que contiene el objeto 'data'

        } catch (error) {
            
            throw error;

        };

    }; //!FUNC-GETROOMBYID


    return {
        room,
        isLoading,

        getRooms,
        getRoomByID
    };

};