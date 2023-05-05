import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import { Errors } from '../components/Errors';

export const RegisterPage = () => {

    const { body, sent, handleChange, handleSubmit } = useForm();

    const { user, error, isLoading, auth:register, clearError } = useAuthStore(); // 

    const url = `${import.meta.env.VITE_API_URL_BASE}/api/v1/users`;

    useEffect(() => {

        sent && register(url, 'POST', body); // entra en el 'useEffect', pero no invoca al fetch hasta que no se envían los datos, es decir, hasta que no haya un cambio en el estado 'body'

    }, [body]);


    return (

        <>

            {
                sent && user.role == 'user' && <Navigate to='/' /> // condicional: si al enviar los datos no se recibe el objeto 'error' (undefined), redirige al índex del usuario
            }

            <div className='auth'>

                <header>

                    <p className='title secondary'> ¡Bienvenido! </p>

                    <h1 className='title lora primary italic'> Studyverse </h1>

                </header>

                <form
                    onSubmit={handleSubmit}
                >

                    <Link
                        to='/login'
                        onClick={clearError}
                    >
                        <span className="material-symbols-rounded">
                            arrow_back
                        </span>
                    </Link>

                    {
                        isLoading && <p> Cargando… </p>

                    }

                    {
                        error && <p> {error} </p> //! pendiente: componente y estilos
                    }

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
                        disabled={sent && !error} // si se envían los datos y hay errores, no se deshabilita
                    />

                </form>

            </div>

        </>

    );

};