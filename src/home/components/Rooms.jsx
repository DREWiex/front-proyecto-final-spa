import { useEffect } from "react";
import { useRoomsStore } from "../hooks/useRoomsStore";
import { CardRoom } from "./CardRoom";

export const Rooms = () => {

    const { room, isLoading, getRooms } = useRoomsStore();

    useEffect(() => {

        getRooms();

    }, []);


    return (

        <>

            <section id="rooms" className="relative rooms bg-ligthprimary">

                <h2 className="title primary"> Salas de estudio </h2>

                <div className="grid-container">

                    {
                        isLoading ? (

                            <h3> Cargando… </h3>

                        ) : (

                            room.map(item => (
                                <CardRoom key={item.room_id} {...item} />
                            ))
                        )
                    }

                </div>

            </section>

        </>

    );

};