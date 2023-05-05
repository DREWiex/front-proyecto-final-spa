import { useDispatch, useSelector } from "react-redux";
import { setRoom, setRoomByID, startLoadingRoom } from "../../store/slices/roomSlice";
import { fetchData } from "../../api/fetch";

export const useRoomsStore = () => {

    const { room, isLoading } = useSelector(state => state.rooms);

    const dispatch = useDispatch();


    const getRooms = async (url) => {

        dispatch(startLoadingRoom());

        try {
            
            const { data } = await fetchData(url);

            dispatch(setRoom(data));

        } catch (error) {

            throw error;

        };

    }; //!FUNC-GETROOMS

    
    const getRoomByID = async (url) => {

        dispatch(startLoadingRoom());

        try {
            
            const { data } = await fetchData(url);

            dispatch(setRoomByID(data));

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