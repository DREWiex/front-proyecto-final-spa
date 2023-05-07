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

    const cosa = useEmailJS(body, sent);

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     e.target.contact_number.value = Date.now(); // asigno un valor único a la consulta enviada por el usuario
    
    //     emailjs.sendForm(
    //         import.meta.env.VITE_SERVICE_ID,
    //         import.meta.env.VITE_TEMPLATE_ID,
    //         form.current,
    //         import.meta.env.VITE_PUBLIC_KEY)
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };


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
                    />

                    <label htmlFor="email"> E-mail: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                    />

                    <label htmlFor="issue"> Motivo: </label>
                    <select
                        id="issue"
                        name="issue"
                        onChange={handleChange}
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
                    >
                    </textarea>

                    <input
                        type="submit"
                        className="submit"
                        value={sent ? 'Enviado' : 'Enviar'} // no está haciendo nada (de momento)
                        disabled={sent}
                    />

                </form>

            </section>

        </>

    );

};