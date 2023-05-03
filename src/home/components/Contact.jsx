import { useForm } from "../../hooks/useForm";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Formulario de contacto
 * @function Contact
 * @returns 
 */
export const Contact = () => {

    const { body, sent, handleChange, handleSubmit } = useForm();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('contact_service', 'contact_form', form.current, 'TyYDeFfK92qKM4Gow')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (

        <>

            <section className="relative border-top contact">

                <h2 className="title primary"> Contacto </h2>

                <form
                    ref={form} onSubmit={sendEmail}
                    // onSubmit={handleSubmit}
                >

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
                        <option value="claim"> Reclamación </option>
                        <option value="suggest"> Sugerencia </option>
                    </select>

                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        placeholder="Escriba aquí…"
                        onChange={handleChange}
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