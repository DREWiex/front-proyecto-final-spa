import { useForm } from "../../hooks/useForm";
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEmailJS } from "../hooks/useEmailJS";

/**
 * Formulario de contacto
 * @function Contact
 * @returns 
 */
export const Contact = () => {

    const { body, sent, handleChange, handleSubmit } = useForm();

    useEmailJS(body, sent); // hook que envía los datos del form una vez que 'sent' es true, es decir, que se haya presionado sobre el input submit


    return (

        <>

            <section id="contact" className="relative contact">

                <h2 className="title primary"> Contacto </h2>

                <form
                    onSubmit={handleSubmit}
                >

                    <input type="hidden" name="contact_number" />

                    <label htmlFor="name"> Nombre: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        onChange={handleChange}
                        disabled={sent}
                    />

                    <label htmlFor="email"> E-mail: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        disabled={sent}
                    />

                    <label htmlFor="issue"> Motivo: </label>
                    <select
                        id="issue"
                        name="issue"
                        onChange={handleChange}
                        disabled={sent}
                    >
                        <option value=""> --Seleccione una opción-- </option>
                        <option value="information"> Información </option>
                        <option value="complaint"> Reclamación </option>
                        <option value="suggestion"> Sugerencia </option>
                    </select>

                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Escriba el mensaje aquí."
                        onChange={handleChange}
                        disabled={sent}
                    >
                    </textarea>

                    <input
                        type="submit"
                        className="submit"
                        value={sent ? 'Enviado' : 'Enviar'}
                        disabled={sent}
                    />

                </form>

            </section>

        </>

    );

};