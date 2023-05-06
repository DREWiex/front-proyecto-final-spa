import { Reservations, Rooms, Users } from "../components";
import { NavBar } from "../layouts/NavBar";

export const DashboardPage = () => {


    return (

        <>

            <NavBar />

            <main className="relative flex-column">

                <h1 className="title primary"> Dashboard </h1>

                <div className="dashboard-menu">

                    <div>
                        <button>
                            <span className="material-symbols-rounded">
                                group
                            </span>
                        </button>
                        <h2> Usuarios </h2>
                    </div>

                    <div>
                        <button>
                            <span className="material-symbols-rounded">
                                chair
                            </span>
                        </button>
                        <h2> Salas de estudio </h2>
                    </div>

                    <div>
                        <button>
                            <span className="material-symbols-rounded">
                                calendar_month
                            </span>
                        </button>
                        <h2> Reservas </h2>
                    </div>

                </div>

                <Users />

                <Rooms />

                <Reservations />

            </main>

        </>

    );

};