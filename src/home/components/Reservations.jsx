import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const Reservations = () => {

    const events = [ //! aquí renderizaría las reservas guardadas en la base de datos
        { title: 'Meeting', start: new Date() }
    ]

    // function renderEventContent(eventInfo) {
    //     return (
    //         <>
    //             <b>{eventInfo.timeText}</b>
    //             <i>{eventInfo.event.title}</i>
    //         </>
    //     )
    // }

    return (

        <>

            <section id="reservations" className="relative bg-ligthprimary">

                <h2 className='title primary'> Reservas </h2>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    weekends={false}
                    events={events}
                    //eventContent={renderEventContent}
                />

            </section>

        </>

    );

};