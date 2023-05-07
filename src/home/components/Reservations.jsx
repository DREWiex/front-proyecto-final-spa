import { useEffect } from "react";
import { useReservationsStore } from "../hooks/useReservationsStore";
import { Link } from 'react-router-dom';

export const Reservations = ({ user }) => {

    const { reservations, error, getUserReservations } = useReservationsStore();

    const { user_id } = user;

    useEffect(() => {

        getUserReservations(user_id);

    }, []);


    return (

        <>

            <section id="reservations" className="relative flex-column">

                <h2 className="title primary"> Mis reservas </h2>

                <div>

                    {error == undefined ? (
                        
                            reservations.map(item => (
                                <div key={item.reservation_id}>
                                    <p> {item.room} </p>
                                    <p> {item.reservation_date} </p>
                                    <p> {item.start_time} </p>
                                    <p> {item.end_time} </p>
                                </div>
                            ))

                        ) : (

                            <div>
                                No hay reservas.
                            </div>

                        )
                    }

                </div>

                <Link to='#'> Hacer reserva </Link>

            </section>

        </>

    );

};