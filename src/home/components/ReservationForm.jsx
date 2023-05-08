import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useReservationsStore } from "../hooks/useReservationsStore";
import { useRoomsStore } from "../hooks/useRoomsStore";

export const ReservationForm = ({ user }) => {

    const { body, sent, handleChange, handleSubmit } = useForm();

    const { room, isLoading } = useRoomsStore(); // las options del select se renderizarán de forma dinámica

    const { reservation, error, addReservation } = useReservationsStore();

    useEffect(() => {

        sent && addReservation(body);

        // sent && reservation &&

    }, [body]);

    //! hacer un reducer que limpie el objeto de update para ponerlo en un botón que limpie el form


    return (

        <>

            <form
                onSubmit={handleSubmit}
            >

                <input
                    type="hidden"
                    name="user_id"
                    value={user.user_id} // recibo el objeto 'user' por props
                    onChange={handleChange}
                />

                <label htmlFor="room_id"> Sala de estudio: </label>
                <select
                    name="room_id"
                    id="room_id"
                    //value={!reservation ? '' : reservation.room_id}
                    onChange={handleChange}
                >
                    <option value=""> --Selecciona una opción-- </option>

                    {
                        isLoading ? ( null ) : (

                            room.map(item => (
                                <option
                                    value={item.room_id}
                                    key={item.room_id}
                                >
                                    {item.room}
                                </option>
                            ))
                        )
                    }

                </select>

                <label htmlFor="reservation_date"> Fecha: </label>
                <input
                    type="date"
                    id="reservation_date"
                    name="reservation_date"
                    // value={!reservation ? '' : reservation.reservation_date.substring(0, 10)}
                    onChange={handleChange}
                />

                <label htmlFor="start_time"> Hora de entrada: </label>
                <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    min="09:00"
                    max="21:00"
                    //value={!reservation ? '' : reservation.start_time}
                    onChange={handleChange}
                />

                <label htmlFor="end_time"> Hora de salida: </label>
                <input
                    type="time"
                    id="end_time"
                    name="end_time"
                    min="10:00"
                    max="22:00"
                    //value={!reservation ? '' : reservation.end_time}
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    className="submit"
                    value="Reservar"
                />

            </form>

            {/* {
                !error ? ( null ) : (
                    error.map(item => (
                        <div key={item}>
                            <p> {item} </p>
                        </div>
                    ))
                )
            } */}

        </>

    );

};