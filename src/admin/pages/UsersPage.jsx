import { useEffect, useState } from "react";
import { useUsersStore } from "../../hooks/useUsersStore";
import { NavBar } from "../layouts/NavBar";
import { Link } from 'react-router-dom';
import { AddUserForm } from "../components/AddUserForm";

export const UsersPage = () => {

  const [toggle, setToggle] = useState(true);

  const {
    user,
    error,
    isLoading,
    getUsers,
    deleteUser
  } = useUsersStore();

  useEffect(() => {

    getUsers();

  }, []);

  //! el problema es que no está cargando el useEffect cuando crea un usuario en AddUserForm


  return (

    <>

      <NavBar />

      <main className="relative dashboard-child">

        <h1 className="title primary"> Dashboard - Usuarios </h1>

        <section>

          <div>
            <button
              className="dashboard-btn"
              onClick={() => { setToggle(!toggle) }}
            >
              <span className="material-symbols-rounded secondary icon-font-size">
                person_add
              </span>
            </button>
            <p> Crear usuario </p>
          </div>

          {/* <Link to='#'>
          <span className="material-symbols-rounded secondary icon-font-size">
            person_add
          </span>
        </Link> */}

          {
            isLoading && <p> Cargando… </p>
          }

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>E-mail</th>
                <th> {/* column - edit */} </th>
                <th> {/* column - delete */} </th>
              </tr>
            </thead>

            <tbody>

              {
                !isLoading && (
                  user.map(item => (
                    <tr key={item.user_id}>

                      <td> {item.user_id} </td>
                      <td> {item.role} </td>
                      <td> {item.first_name} </td>
                      <td> {item.last_name} </td>
                      <td> {item.email} </td>
                      <td>
                        <button
                          className="dashboard-btn"
                        >
                          <span className="material-symbols-rounded secondary icon-font-size">
                            edit
                          </span>
                        </button>
                      </td>
                      <td>
                        <button
                          className="dashboard-btn"
                          onClick={() => { deleteUser(item.user_id) }}
                        >
                          <span className="material-symbols-rounded danger icon-font-size">
                            delete
                          </span>
                        </button>
                      </td>

                    </tr>
                  ))
                )
              }

            </tbody>

          </table>

        </section>

        {
          !toggle && <AddUserForm />
        }

      </main>

    </>

  );

};