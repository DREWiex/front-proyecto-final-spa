import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useReservationsStore } from "../hooks/useReservationsStore";
import { ReservationForm, ReservationsTable } from "../components";

export const Reservations = ({ user }) => {

    const { reservations, error, getUserReservations } = useReservationsStore();

    // const [toggle, setToggle] = useState(true);

    const { user_id } = user;

    useEffect(() => {

        getUserReservations(user_id);

    }, []);


    return (

        <>

            <section id="reservations" className="relative reservations">

                <h2 className="title primary"> Reservas </h2>

                {error == undefined ? (

                        <div>

                            <p> Tienes <span className="secondary">{reservations.length}</span> reservas. </p>

                            <ReservationsTable reservations={reservations} />

                        </div>

                    ) : (

                        <div>

                            <p> No tienes reservas. </p>

                        </div>

                    )
                }

                {/* <button
                    onClick={() => { setToggle(!toggle) }}
                >
                    <span className="material-symbols-rounded">
                        event
                    </span>
                    Hacer reserva
                </button> */}

                <ReservationForm user={user} />

            </section>

        </>

    );

};