import { useAuthStore } from '../../auth/hooks/useAuthStore';
import { Contact, Reservations, Rooms } from '../components';
import { NavBar } from '../layouts';

export const HomePage = () => {

    const { user } = useAuthStore();


    return (

        <>

            <NavBar />

            <main className="flex-column">

                <div className="relative flex-column">
                    <img
                        src="https://res.cloudinary.com/dmxii9sz3/image/upload/v1683188301/pexels-lisa-fotios-1472841_nrfkoa.jpg"
                        alt="Persona leyendo un libro mientras está sentada"
                        title="Persona leyendo un libro mientras está sentada"
                        className="cover"
                    />
                </div>

                <Reservations user={user} />

                <Rooms />

                <Contact />

            </main>

        </>

    );

};