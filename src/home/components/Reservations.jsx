import { useEffect, useState } from "react";
import { useReservationsStore } from "../hooks/useReservationsStore";
import { ReservationForm, ReservationsTable } from "../components";
import { ReservationUpdateForm } from "./ReservationUpdateForm";

export const Reservations = ({ user }) => {

    const [toggle, setToggle] = useState(true);

    const { reservations, reservation, error, getUserReservations } = useReservationsStore();

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

                            <ReservationsTable toggle={toggle} setToggle={setToggle} />

                        </div>

                    ) : (

                        <div>

                            <p> No tienes reservas. </p>

                        </div>

                    )
                }

                {
                    toggle ? (<ReservationForm user={user} />) : (<ReservationUpdateForm user={user} />)
                }


            </section>

        </>

    );

};