import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRoomsStore } from '../hooks/useRoomsStore';
import { NavBar } from '../layouts';
import { ReservationForm } from '../components';
import { useAuthStore } from '../../auth/hooks/useAuthStore';

export const RoomDetailPage = () => {

    const { room, getRoomByID } = useRoomsStore();

    const { user } = useAuthStore();

    const { id } = useParams();

    useEffect(() => {

        getRoomByID(id)

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

                    <button>
                        <span className="material-symbols-rounded">
                            event
                        </span>
                        Hacer reserva
                    </button>

                    <ReservationForm user={user}/>

                </div>

            </main>

        </>

    );

};