import { Link, Navigate } from 'react-router-dom';
import { useAuthFetch } from "../../hooks/useAuthFetch";
import { useForm } from "../../hooks/useForm";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const LoginPage = () => {

    const { user } = useContext(UserContext);

    const { body, sent, handleChange, handleSubmit } = useForm();

    const url = 'http://localhost:3000/auth/login';

    useAuthFetch(url, 'POST', body);


    return (

        <>

            {
                sent && user.ok && <Navigate to='home' /> // condicional: si 'ok' es true, redirige al home
            }

            <h1> ¡Bienvenido a Studyverse! </h1>

            <section className="flex fd-column">

                <h2> Login </h2>

                <form
                    className="flex fd-column"
                    onSubmit={handleSubmit}
                >

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
                        placeholder="Password"
                        onChange={handleChange}
                        disabled={sent}
                    />

                    <input
                        className='pointer'
                        type="submit"
                        value={sent ? 'Enviado' : 'Enviar'}
                        disabled={sent}
                    />

                </form>

                <Link to='/register'> Crear una cuenta </Link>

                <Link to='#'> Recuperar contraseña </Link>

            </section>

        </>

    );

};