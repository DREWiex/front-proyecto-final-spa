import { Link, Navigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { useAuthFetch } from '../hooks/useAuthFetch';
import { useAuthStore } from '../hooks/useAuthStore';

export const LoginPage = () => {

    // const { user } = useContext(UserContext);

    const { user, role, error, isLoading, login } = useAuthStore();

    const { body, sent, handleChange, handleSubmit } = useForm();

    const url = `${import.meta.env.VITE_API_URL_BASE}/auth/login`;

    // useAuthFetch(url, 'POST', body, sent);

    useEffect(() => {

        sent && login(url, 'POST', body); // entra en el 'useEffect', pero no invoca al fetch hasta que no se hace click en el submit y haya un cambio en 'body'

    }, [body]);


    return (

        <>

            {/* {
                sent && user.ok && <Navigate to='/' /> // condicional: si 'ok' es true, redirige al índex del user (de momento)
            } */}

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