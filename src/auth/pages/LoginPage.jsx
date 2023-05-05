import { Link, Navigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useEffect } from 'react';
import { useAuthStore } from '../hooks/useAuthStore';
import { Errors } from '../components/Errors';

export const LoginPage = () => {

    const { body, sent, handleChange, handleSubmit } = useForm();

    const { user, error, isLoading, login } = useAuthStore();

    const url = `${import.meta.env.VITE_API_URL_BASE}/auth/login`;

    useEffect(() => {

        sent && login(url, 'POST', body); // entra en el 'useEffect', pero no invoca al fetch hasta que no se hace click en el submit y haya un cambio en 'body'

    }, [body]);


    return (

        <>

            {
                sent && user.role === 'user' && <Navigate to='/' />
            }

            {
                sent && user.role === 'admin' && <Navigate to='/dashboard-admin' />
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

                    {
                        isLoading && <p> Cargando… </p>

                    }

                    {
                        error && error.map(item => (
                            <Errors key={item} {...item} />
                        ))
                    }

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