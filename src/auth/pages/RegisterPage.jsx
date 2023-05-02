import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { useAuthFetch } from '../../hooks/useAuthFetch';

export const RegisterPage = () => {

    const { user } = useContext(UserContext);

    const { body, sent, handleChange, handleSubmit } = useForm();

    const url = 'http://localhost:3000/api/v1/users';

    sent && useAuthFetch(url, 'POST', body);

    console.log(user);


    return (

        <>

            <h1> ¡Bienvenido a Studyverse! </h1>

            <section className="flex fd-column">

                <h2> Registro </h2>

                <form
                    className="flex fd-column"
                    onSubmit={handleSubmit}
                >

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
                        placeholder='Password'
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
                        className='pointer'
                        type="submit"
                        value={sent ? 'Enviado' : 'Enviar'}
                        disabled={sent}
                    />

                </form>

                <Link to='/login'> Login </Link>

                <Link to='#'> Recuperar contraseña </Link>

            </section>

        </>

    );

};