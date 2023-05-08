import { useEffect } from "react";
import { useReservationsStore } from "../hooks/useReservationsStore";
import { ReservationForm, ReservationsTable } from "../components";

export const Reservations = ({ user }) => {

    const { reservations, error, getUserReservations } = useReservationsStore();

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

                            <ReservationsTable />

                        </div>

                    ) : (

                        <div>

                            <p> No tienes reservas. </p>

                        </div>

                    )
                }

                <ReservationForm user={user} />

            </section>

        </>

    );

};