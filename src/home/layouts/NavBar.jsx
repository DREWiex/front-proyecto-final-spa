import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../auth/hooks/useAuthStore';

export const NavBar = () => {

    const [toggle, setToggle] = useState(true);

    const { logout } = useAuthStore();


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
                                <li><Link to="#"> Mi perfil </Link></li>
                                <li><Link to="#"> Salas </Link></li>
                                <li><Link to="/reservation-form"> Reservas </Link></li>
                                <li><Link to="#"> Contacto </Link></li>
                                <li><Link
                                    to="/login"
                                    onClick={logout}
                                >
                                    Logout
                                </Link></li>
                            </ul>
                        ) : (
                            <ul className='nav-menu_visible'>
                                <li><Link to="#"> Mi perfil </Link></li>
                                <li><Link to="#"> Salas </Link></li>
                                <li><Link to="/reservation-form"> Reservas </Link></li>
                                <li><Link to="#"> Contacto </Link></li>
                                <li><Link
                                    to="/login"
                                    onClick={logout}
                                >
                                    Logout
                                </Link></li>
                            </ul>
                        )
                    }

                </div>

            </nav>

        </>

    );

};