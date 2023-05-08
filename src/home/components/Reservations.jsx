import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useReservationsStore } from "../hooks/useReservationsStore";
import { ReservationForm } from "../components";

export const Reservations = ({ user }) => {

    const { reservations, error, getUserReservations } = useReservationsStore();

    const { user_id } = user;

    useEffect(() => {

        getUserReservations(user_id);

    }, []);


    return (

        <>

            <section id="reservations" className="relative flex-column">

                <h2 className="title primary"> Reservas </h2>

                {error == undefined ? (

                        <div>

                            <p> Tienes <span className="secondary">{reservations.length}</span> reservas. </p>

                            <Link to='/my-reservations'> Ir a mis reservas </Link>

                        </div>

                    ) : (

                        <p> No tienes reservas. </p>

                    )
                }

                <button>
                    <span className="material-symbols-rounded">
                        event
                    </span>
                    Hacer reserva
                </button>

                <ReservationForm user={user} />

            </section>

        </>

    );

};