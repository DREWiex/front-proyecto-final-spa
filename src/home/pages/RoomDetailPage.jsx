import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRoomsStore } from '../hooks/useRoomsStore';
import { Link } from 'react-router-dom';
import { NavBar } from '../layouts';

export const RoomDetailPage = () => {

    const { room, getRoomByID } = useRoomsStore();

    const { id } = useParams();

    const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/rooms/${id}`;

    useEffect(() => {

        getRoomByID(url)

    }, [])

    const {
        room_id,
        room: room_name, // renombro la propiedad para evitar posibles conflictos con el estado 'room'
        description,
        photo
    } = room;


    return (

        <>

            <NavBar />

            <main className='relative flex-column'>

                <div id={room_id} className='flex-column'>

                    <Link to='/'> Volver </Link>

                    <div>
                        <img src={photo} alt={room_name} title={room_name} />
                    </div>

                    <h2> {room_name} </h2>

                    <p> {description} </p>

                    <Link to='#'> Reservar sala </Link>

                </div>

            </main>

        </>

    );

};