import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRoomsStore } from '../hooks/useRoomsStore';
import { NavBar } from '../layouts';

export const RoomDetailPage = () => {

    const { room, getRoomByID } = useRoomsStore();

    const { id } = useParams();

    useEffect(() => {

        getRoomByID(id);

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

            <main className='relative roomdp'>

                <Link to='/'>
                    <span className="material-symbols-rounded secondary icon-font-size">
                        arrow_back
                    </span>
                </Link>

                <div id={room_id}>

                    <div>
                        <img src={photo} alt={room_name} title={room_name} />
                    </div>

                    <h2> {room_name} </h2>

                    <p> {description} </p>

                </div>

            </main>

        </>

    );

};