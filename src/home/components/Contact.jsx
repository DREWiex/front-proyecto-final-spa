import { useForm } from "../../hooks/useForm";

export const Contact = () => {

    const { body, sent, handleChange, handleSubmit } = useForm();


    return (

        <>

            <section className="relative border-top">

                <h2> Contacto </h2>

                <form
                    onSubmit={handleSubmit}
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