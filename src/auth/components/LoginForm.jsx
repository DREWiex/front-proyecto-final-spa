import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthFetch } from '../../hooks/useAuthFetch';

export const LoginForm = () => {

    const { form, sent, handleChange, handleSubmit } = useForm();

    // const url = 'http://localhost:3000/auth/login';

    // const isAuth = useAuthFetch(url, 'POST', form);


    return (

        <section>

            <h2> Login </h2>

            <form
                action=""
                method=""
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
                    type="submit"
                    value={sent ? 'Enviado' : 'Enviar'}
                    disabled={sent}
                />

            </form>

            <Link to='/register'> Crear una cuenta </Link>

            <Link to='#'> Recuperar contraseña </Link>

        </section>

    );

};