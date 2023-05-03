import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [toggle, setToggle] = useState(true);


    return (

        <>

            <nav className="navbar">

                <div>

                    <Link href="/home" className="lora italic"> Studyverse </Link>
                    <button
                        onClick={() => { setToggle(!toggle) }}
                        className="nav-toggle"
                        aria-label="Open menu"
                    >
                        <i id="btn-bars" className="fa-solid fa-bars"></i>
                    </button>

                    {
                        toggle ? (
                            <ul>
                                <li><Link href="#"> Mi perfil </Link> </li>
                                <li><Link href="#"> Salas de estudio </Link> </li>
                                <li> <Link href="#"> Reservas </Link> </li>
                                <li> <Link href="#"> Contacto </Link> </li>
                                <li> <Link href="#"> Cerrar sesión </Link> </li>
                            </ul>
                        ) : (
                            <ul className='nav-menu_visible'>
                                <li><Link href="#"> Mi perfil </Link> </li>
                                <li><Link href="#"> Salas de estudio </Link> </li>
                                <li> <Link href="#"> Reservas </Link> </li>
                                <li> <Link href="#"> Contacto </Link> </li>
                                <li> <Link href="#"> Cerrar sesión </Link> </li>
                            </ul>
                        )
                    }



                </div>

            </nav>

        </>

    );

};