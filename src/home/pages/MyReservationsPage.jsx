import { useAuthStore } from "../../auth/hooks/useAuthStore";
import { useReservationsStore } from "../hooks/useReservationsStore";
import { NavBar } from "../layouts";

export const MyReservationsPage = () => {

    const { user } = useAuthStore();

    const { reservations, error, getUserReservations } = useReservationsStore();


    return (

        <>

        <NavBar />

            {/* {error == undefined ? (

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
            } */}

        </>

    );

};