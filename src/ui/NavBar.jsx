import { Link } from 'react-router-dom';

export const NavBar = () => {


    return (

        <>

            <nav className="navbar">

                <div>

                    <Link href="/home" className="lora italic"> Studyverse </Link>
                    <button className="nav-toggle" aria-label="Open menu">
                        <i id="btn-bars" className="fa-solid fa-bars"></i>
                    </button>

                    <ul>
                        <li><Link href="#rooms"> Salas de estudio </Link> </li>
                        <li> <Link href="#reservations"> Mis reservas </Link> </li>
                        <li> <Link href="#contact"> Contacto </Link> </li>
                    </ul>

                </div>

            </nav>

        </>

    );

};