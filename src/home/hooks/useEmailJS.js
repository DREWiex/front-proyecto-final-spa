import { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetch';

export const useEmailJS = (data, sent) => {

    const [contact, setContact] = useState();

    const url = 'https://api.emailjs.com/api/v1.0/email/send';

    const body = {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_PUBLIC_KEY,
        template_params: data
    };

    const fetchEmailJS = async () => {

        try {
            
            const fetch = await fetchData(url, 'POST', body);

            setContact(fetch);

        } catch (error) {
            
            console.log(error);

        };

    }; //!FUNC-FETCHEMAILJS


    useEffect(() => {

        sent && fetchEmailJS()

    }, [data]);

    return contact;

};