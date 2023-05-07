import { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetch';

export const useEmailJS = (data, sent) => {

    const url = 'https://api.emailjs.com/api/v1.0/email/send';

    data.contact_number = Date.now(); // asigno un valor único a la consulta enviada por el usuario, ya que, por defecto, en el input del form es un string vacío

    const body = {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_PUBLIC_KEY,
        template_params: data
    };

    const fetchEmailJS = async () => {

        try {
            
            await fetchData(url, 'POST', body);

        } catch (error) {
            
            console.log(error);

        };

    }; //!FUNC-FETCHEMAILJS


    useEffect(() => {

        sent && fetchEmailJS()

    }, [data]);

};