import { Link } from 'react-router-dom';

export const RegisterForm = () => {


    return (

        <>

            <form action="#" method="#">

                <label htmlFor="first_name"> Nombre </label>
                <input type="text" id="first_name" name="first_name" placeholder="Nombre" />

                <label htmlFor="last_name"> Apellidos </label>
                <input type="text" id="last_name" name="last_name" placeholder="Apellidos" />

                <label htmlFor="email"> E-mail </label>
                <input type="email" id="email" name="email" placeholder="E-mail" />

                <label htmlFor="password"> Password </label>
                <input type="password" id="password" name="password" />

                <label htmlFor="image"> Foto de perfil </label>
                <input type="file" id="image" name="image" />

                <input type="hidden" id="avatar" name="avatar" value="https://t.ly/kiRJ" />

                <input type="submit" />

            </form>

            <Link to='/'> Login </Link>

            <Link to='#'> Recuperar contraseña </Link>

        </>

    );

};