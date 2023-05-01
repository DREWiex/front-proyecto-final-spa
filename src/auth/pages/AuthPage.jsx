import { useLocation } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../components';

export const AuthPage = () => {

    const { pathname } = useLocation();


    return (

        <main>

            <h1> ¡Bienvenido a Studyverse! </h1>

            {
                pathname == '/login' && <LoginForm />
            }

            {
                pathname == '/register' && <RegisterForm />
            }

        </main>

    );

};