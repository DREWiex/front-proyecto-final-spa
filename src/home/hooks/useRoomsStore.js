import { useDispatch, useSelector } from "react-redux";
import { setRoom, startLoadingRoom } from "../../store/slices/roomSlice";
import { authFetch } from '../../api/authFetch';

export const useRoomsStore = () => {

    const { room, isLoading } = useSelector(state => state.rooms);

    const dispatch = useDispatch();


    const getRooms = async (url) => {

        dispatch(startLoadingRoom());

        try {
            
            const { data } = await authFetch(url);

            dispatch(setRoom(data));

        } catch (error) {

            throw error;

        };

    }; //!FUNC-GETROOMS

    
    const getRoomByID = async (url) => {

        dispatch(startLoadingRoom());

        try {
            
            const { data } = await authFetch(url);

            dispatch(setRoom(data));

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