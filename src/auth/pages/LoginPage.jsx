import { Link, Navigate } from 'react-router-dom';
import { useAuthFetch } from "../../hooks/useAuthFetch";
import { useForm } from "../../hooks/useForm";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const LoginPage = () => {

    const { user } = useContext(UserContext);

    const { body, sent, handleChange, handleSubmit } = useForm();

    const url = `${import.meta.env.VITE_API_URL_BASE}/auth/login`;

    useAuthFetch(url, 'POST', body, sent);


    return (

        <>

            {
                sent && user.ok && <Navigate to='/' /> // condicional: si 'ok' es true, redirige al índex del user (de momento)
            }

            <div className='auth'>

                <header>

                    <p className='title secondary'> ¡Bienvenido! </p>

                    <h1 className='title lora primary italic'> Studyverse </h1>

                </header>

                <form
                    onSubmit={handleSubmit}
                >

                    <Link to='/register' className="secondary"> Crear cuenta </Link>


                    <label htmlFor="email"> E-mail </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        disabled={sent}
                    />

                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        disabled={sent}
                    />

                    <input
                        className='submit'
                        type="submit"
                        value="Login"
                        disabled={sent}
                    />

                    <Link to='#'> Recuperar contraseña </Link>

                </form>

            </div>

        </>

    );

};