import { useEffect } from 'react';
import { fetchData } from '../../api/fetch';

/**
 * Hook que envía los datos del formulario al e-mail del admin.
 * @function useEmailJS
 * @param {Object} data Datos del formulario.
 * @param {Boolean} sent Indica si se ha solicitado o no enviar la información (input submit).
 */
export const useEmailJS = (data, sent) => {

    const url = 'https://api.emailjs.com/api/v1.0/email/send'; // url de la API que recibirá el fetch como argumento 

    data.contact_number = Date.now(); // asigno un valor único a la consulta enviada por el usuario, ya que, por defecto, en el input del form es un string vacío

    /**
     * @typedef {Object} body
     * @property {String} service_id ID del servicio a través del cual se debe enviar el e-mail
     * @property {String} template_id ID de la plantilla del e-mail
     * @property {String} user_id Clave público de la cuenta
     * @property {Object} template_params Datos del formulario que recibirá la plantilla del e-mail
     */
    const body = {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_PUBLIC_KEY,
        template_params: data
    };

    /**
     * Conexión con el fetch.
     * @function fetchEmailJS
     * @async
     */
    const fetchEmailJS = async () => {

        try {
            
            await fetchData(url, 'POST', body); // utilizo el fetch para hacer la solicitud a la API de EmailJS

        } catch (error) {
            
            console.log(error);

        };

    }; //!FUNC-FETCHEMAILJS


    useEffect(() => {

        sent && fetchEmailJS() // hará la llamada al fetch solo cuando 'sent' sea true, es decir, cuando se haya enviado la solicitud desde el form (input submit)

    }, [data]);

};