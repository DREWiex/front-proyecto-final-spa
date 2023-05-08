import { Link } from 'react-router-dom';
import { NavBar } from "../layouts/NavBar";

export const DashboardPage = () => {


    return (

        <>

            <NavBar />

            <main className="relative dashboard">

                <h1 className="title primary"> Dashboard </h1>

                <div className="dashboard-menu">

                    <div>
                        <Link to='/dashboard-admin/users'>
                            <span className="material-symbols-rounded">
                                group
                            </span>
                        </Link>
                        <h2> Usuarios </h2>
                    </div>

                    <div>
                        <Link to='/dashboard-admin/rooms'>
                            <span className="material-symbols-rounded">
                                chair
                            </span>
                        </Link>
                        <h2> Salas de estudio </h2>
                    </div>

                    <div>
                        <Link to='/dashboard-admin/reservations'>
                            <span className="material-symbols-rounded">
                                calendar_month
                            </span>
                        </Link>
                        <h2> Reservas </h2>
                    </div>

                </div>

            </main>

        </>

    );

};