import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm';

export const LoginForm = () => {

    const {user, setUser} = useContext(UserContext);

    const { form, sent, handlerChange, handlerSubmit } = useForm();

    

  return (

    <>

    <form
        action="#"
        method="#"
        onSubmit={handlerSubmit}
    >

        <label htmlFor="email"> E-mail </label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={handlerChange}
        />

        <label htmlFor="password"> Password </label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handlerChange}
        />

        <input
            type="submit"
            value={sent ? 'Enviado' : 'Enviar'}
            disabled={sent}
        />

    </form>

    <Link to='/register'> Crear una cuenta </Link>

    <Link to='#'> Recuperar contraseña </Link>

    </>

  );

};