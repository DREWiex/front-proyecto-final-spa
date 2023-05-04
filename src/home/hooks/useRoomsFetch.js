import { useEffect, useState } from 'react';
import { authFetch } from '../../api/authFetch'


export const useRoomsFetch = (url) => {

    const [room, setRoom] = useState({});


    const fetchingRooms = async () => {

        const cosa = await authFetch(url)

        setRoom(cosa);

    };

    useEffect(() => {

        fetchingRooms();

    }, [])
    
    return room;

};