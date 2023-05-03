import { useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { Contact, Reservations, Rooms } from '../components';

export const HomePage = () => {

    const { user } = useContext(UserContext);


    return (

        <>

            <header className="relative">
                <p className="title">¡Hola, {user.first_name}!</p>
            </header>

            <Rooms />

            <Reservations />

            <Contact />

        </>

    );

};