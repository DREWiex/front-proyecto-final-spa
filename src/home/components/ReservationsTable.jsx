import { useReservationsStore } from "../hooks/useReservationsStore";

export const ReservationsTable = () => {

    const { reservations, deleteReservation } = useReservationsStore();


    return (

        <>

            <table>

                <tbody>

                    {
                        reservations.map(item => (
                            <tr key={item.reservation_id}>
                                <td>{item.reservation_date.substring(0, 10)}</td> {/* modifico el formato de la fecha */}
                                <td>{item.room}</td>
                                <td>{item.start_time.substring(0, 5)}</td>
                                <td>{item.end_time.substring(0, 5)}</td>
                                <td>
                                    <button
                                        className="dashboard-btn"
                                    >
                                        <span className="material-symbols-rounded secondary icon-font-size">
                                            edit
                                        </span>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="dashboard-btn"
                                        onClick={() => { deleteReservation(item.reservation_id, item.user_id) }}
                                    >
                                        <span className="material-symbols-rounded danger icon-font-size">
                                            delete
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </>

    );

};