import { useEffect } from "react";
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

                    reservations.map(item => (
                        <div key={item.reservation_id}>
                            <p> {item.room} </p>
                            <p> {item.reservation_date} </p>
                            <p> {item.start_time} </p>
                            <p> {item.end_time} </p>
                        </div>
                    ))

                ) : (

                    <p> No hay reservas. </p>

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