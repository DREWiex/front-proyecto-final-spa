
export const ReservationForm = ({ user }) => {




    return (

        <>

            <form>

                <input
                    type="hidden"
                    name="user_id"
                    value={user.user_id}
                />

                {/* Las opciones del select tienen que ser dinámicas */}

                <label htmlFor="room_id"> Sala de estudio: </label>
                <select
                    name="room_id"
                    id="room_id"
                    required
                >
                    <option value=""> --Selecciona una opción-- </option>
                    <option value="1"> Sala de estudio 1 </option>
                    <option value="2"> Sala de estudio 2 </option>
                </select>

                <label htmlFor="reservation_date"> Fecha: </label>
                <input
                    type="date"
                    id="reservation_date"
                    name="reservation_date"
                    required
                />

                <label htmlFor="start_time"> Hora de entrada: </label>
                <input
                    type="time"
                    id="start_time"
                    name="start_time"
                    min="09:00"
                    max="21:00"
                    required
                />

                <label htmlFor="end_time"> Hora de salida: </label>
                <input
                    type="time"
                    id="end_time"
                    name="end_time"
                    min="10:00"
                    max="22:00"
                    required
                />

                <input
                    type="submit"
                    className="submit"
                    value="Hacer reserva"
                />

            </form>

        </>

    )
};