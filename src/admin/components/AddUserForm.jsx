import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useUsersStore } from "../../hooks/useUsersStore";

/**
 * Formulario de registro de usuarios.
 * @function AddUserForm
 */
export const AddUserForm = () => {

    const { body, sent, handleChange, handleSubmit } = useForm() // destructuración de las propiedades que devuelve el hook 'useForm'

    const { getUsers, addUser } = useUsersStore(); // destructuración de las propiedades que devuelve el hook 'useUsersStore'

    useEffect(() => {

        sent && addUser(body); // si el formularío se envía ('sent' es 'true'), invoca a la función 'addUser'

        sent && getUsers() // si el formularío se envía ('sent' es 'true'), invoca a la función 'getUsers' (dashboard del admin)

    }, [body]); // además de cuando se monta el componente, el useEffect se activará cada vez que el estado 'body' cambie


    return (

        <>

            <form
                onSubmit={handleSubmit}
            >

                <label htmlFor="first_name"> Nombre </label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Nombre"
                    onChange={handleChange}
                />

                <label htmlFor="last_name"> Apellidos </label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Apellidos"
                    onChange={handleChange}
                />

                <label htmlFor="email"> E-mail </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                />

                <label htmlFor="password"> Password </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Contraseña'
                    onChange={handleChange}
                />

                <label htmlFor="role">Role:</label>
                <select name="role" id="role">
                    <option value=""> --Seleccionar un rol-- </option>
                    <option value="1"> Admin </option>
                    <option value="2"> User </option>
                </select>

                <input
                    type="hidden"
                    id="avatar"
                    name="avatar"
                    value="https://t.ly/kiRJ"
                />

                <input
                    className='submit'
                    type="submit"
                    value="Crear cuenta"
                />

            </form>

        </>

    );

};