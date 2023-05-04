import { useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { Contact, Reservations, Rooms } from '../components';

export const HomePage = () => {

    const { user } = useContext(UserContext);


    return (

        <>
            
            <div className="relative flex-column">
                <img
                    src="https://res.cloudinary.com/dmxii9sz3/image/upload/v1683188301/pexels-lisa-fotios-1472841_nrfkoa.jpg"
                    alt="Persona leyendo un libro mientras está sentada"
                    title="Persona leyendo un libro mientras está sentada"
                    className="cover"
                />
            </div>

            <Rooms />

            <Reservations />

            <Contact />

        </>

    );

};