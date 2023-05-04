import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [toggle, setToggle] = useState(true);


    return (

        <>

            <nav className="navbar">

                <div>

                    <Link to="/" className="lora italic"> Studyverse </Link>
                    <button
                        onClick={() => { setToggle(!toggle) }}
                        className="nav-toggle"
                        aria-label={toggle ? "Open menu" : "Close menu"}
                    >
                        <i id="btn-bars" className="fa-solid fa-bars"></i>
                    </button>

                    {
                        toggle ? (
                            <ul>
                                <li><Link to="#"> Mi perfil </Link> </li>
                                <li><Link to="#"> Salas </Link> </li>
                                <li> <Link to="#"> Reservas </Link> </li>
                                <li> <Link to="#"> Contacto </Link> </li>
                                <li> <Link to="#"> Logout </Link> </li>
                            </ul>
                        ) : (
                            <ul className='nav-menu_visible'>
                                <li><Link to="#"> Mi perfil </Link> </li>
                                <li><Link to="#"> Salas de estudio </Link> </li>
                                <li> <Link to="#"> Reservas </Link> </li>
                                <li> <Link to="#"> Contacto </Link> </li>
                                <li> <Link to="#"> Cerrar sesión </Link> </li>
                            </ul>
                        )
                    }

                </div>

            </nav>

        </>

    );

};