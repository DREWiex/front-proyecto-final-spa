import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useEffect } from 'react';
import { useAuthStore } from '../hooks/useAuthStore';
import { Errors } from '../components/Errors';

export const LoginPage = () => {

    const { body, sent, handleChange, handleSubmit } = useForm();

    const { error, isLoading, auth:login, clearError } = useAuthStore();

    const url = `${import.meta.env.VITE_API_URL_BASE}/auth/login`;

    useEffect(() => {

        sent && login(url, 'POST', body); // entra en el 'useEffect', pero no invoca al fetch hasta que no se envían los datos, es decir, hasta que no haya un cambio en el estado 'body'

    }, [body]);


    return (

        <>

            <div className='auth'>

                <header>

                    <p className='title secondary'> ¡Bienvenido! </p>

                    <h1 className='title lora primary italic'> Studyverse </h1>

                </header>

                <form
                    onSubmit={handleSubmit}
                >

                    <Link
                        to='/register'
                        className="secondary"
                        onClick={clearError}
                    >
                        Crear cuenta
                    </Link>

                    {
                        isLoading && <p> Cargando… </p>

                    }

                    {
                        error && <p> {error} </p> //! pendiente: componente y estilos
                    }

                    <label htmlFor="email"> E-mail </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                    />

                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                    />

                    <input
                        className='submit'
                        type="submit"
                        value="Login"
                        disabled={sent && !error} // si se envían los datos y hay errores, no se deshabilita
                    />

                    <Link to='#'> Recuperar contraseña </Link>

                </form>

            </div>

        </>

    );

};