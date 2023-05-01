import { Link } from 'react-router-dom';

export const LoginForm = () => {


  return (

    <>

    <form action="#" method="#">

        <label htmlFor="email"> E-mail </label>
        <input type="email" id="email" name="email" placeholder="E-mail" />

        <label htmlFor="password"> Password </label>
        <input type="password" id="password" name="password" />

        <input type="submit" />

    </form>

    <Link to='/register'> Crear una cuenta </Link>

    <Link to='#'> Recuperar contraseña </Link>

    </>

  );

};