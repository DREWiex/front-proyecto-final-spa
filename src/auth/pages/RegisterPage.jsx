import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { useAuthFetch } from '../hooks/useAuthFetch';

export const RegisterPage = () => {

    const { user } = useContext(UserContext);

    const { body, sent, handleChange, handleSubmit } = useForm();

    const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/users`;

    useAuthFetch(url, 'POST', body, sent);


    return (

        <>

            {
                sent && user.ok && <Navigate to='/' /> // condicional: si 'ok' es true, redirige al índex del usuario (de momento)
            }

            <div className='auth'>

                <header>

                    <p className='title secondary'> ¡Bienvenido! </p>

                    <h1 className='title lora primary italic'> Studyverse </h1>

                </header>

                <form
                    onSubmit={handleSubmit}
                >

                    <Link to='/login'>
                        <span className="material-symbols-rounded">
                            arrow_back
                        </span>
                    </Link>

                    <label htmlFor="first_name"> Nombre </label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="Nombre"
                        onChange={handleChange}
                    />

                    <label htmlFor="last_name"> Apellidos </label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Apellidos"
                        onChange={handleChange}
                    />

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
                        placeholder='Contraseña'
                        onChange={handleChange}
                    />

                    <label htmlFor="image"> Foto de perfil </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        disabled={sent}
                    />

                    <input
                        type="hidden"
                        id="avatar"
                        name="avatar"
                        value="https://t.ly/kiRJ"
                    />

                    <input
                        className='submit'
                        type="submit"
                        value="Crear cuenta"
                        disabled={sent}
                    />

                </form>

            </div>

        </>

    );

};