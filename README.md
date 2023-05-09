# Proyecto final SPA - Frontend
## Studyverse

Desarrollado por: **Andrés León**

---

### Introducción

**Studyverse** es una aplicación que permite reservar salas de estudio a los alumnos que están registrados.

Consta de tres entornos:
- Rutas públicas: login y registro.
- Dashboard del usuario: se accede si el rol del usuario es 'user'. En esta área podrá consultar la información de sus reservas, salas de estudio y formulario de contacto.
- Dashboard del admin: se accede con un único usuario con rol 'admin'. En esta área podrá crear, editar y eliminar usuarios, salas de estudio y reservas.

---

### Inicialización

1. Clonar el repositorio:
```
git clone https://github.com/DREWiex/front-proyecto-final-spa.git
```
2. Instalar las dependencias:
```
yarn add
```
3. Configurar las variables de entorno creando el archivo ```.env``` tomando como referencia el archivo ```.template.env```.
4. Iniciar la aplicación:
```
yarn dev
```

---

### Rutas

|             **RUTA**            |                    **DESCRIPCIÓN**                    |
|:-------------------------------:|:-----------------------------------------------------:|
| "/login"                        | Formulario de login.                                  |
| "/register"                     | Formulario de registro.                               |
| "/"                             | Landing page del usuario logueado.                    |
| "/room/:id"                     | Vista detalle de una sala de estudio.                 |
| "/dashboard-admin"              | Dashboard del admin.                                  |
| "/dashboard-admin/users"        | Gestión de usuarios desde el dashboard admin.         |
| "/dashboard-admin/rooms"        | Gestión de salas de estudio desde el dashboard admin. |
| "/dashboard-admin/reservations" | Gesti´ón de reservas desde el dashboard admin.        |

---

### Tecnologías / herramientas de desarrollo

- **React**
- **Vite**

---

### Librerías

- **EmailJS:** servicio que ayuda a enviar correos electrónicos utilizando aplicaciones del lado del cliente, en este caso React. Está implementado en el formulario de contacto que se encuentra en la página principal del usuario.

---

### Despliegue

Despliegue hecho en Netlify: https://profound-starburst-ffb911.netlify.app

---

### Próxima versión

- Recuperar/cambiar contraseña.

- Implementación del calendario utilizando las librerías react-big-calendar y Datepicker.

- Gestión de las salas de estudio y de las reservas desde el dashboard del admin (CRUD).

- Crear dos nuevas tablas en PostgreSQL:

    - Status: para manejar el estado de la reserva:

        - Reservada.
        - Pendiente.
        - Anulada.

    - Password: para gestionar la recuperación de contraseña del usuario. En ella se relacionará el usuario con el token que se genere temporalmente al enviarse el e-mail para la recuperación (EmailJS).
