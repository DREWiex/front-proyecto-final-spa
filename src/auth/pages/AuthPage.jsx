import { LoginForm } from "../components/LoginForm";
import { useLocation } from 'react-router-dom';
import { RegisterForm } from "../components/RegisterForm";

export const AuthPage = () => {

    const { pathname } = useLocation();


    return (

        <main>

            <h1> ¡Bienvenido a Studyverse! </h1>

            {
                pathname == '/' && <LoginForm />
            }

            {
                pathname == '/register' && <RegisterForm />
            }

        </main>

    );

};