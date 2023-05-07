import { fetchData } from '../../api/fetch';

export const useEmailJS = (data) => {

    const url = 'https://api.emailjs.com/api/v1.0/email/send';

    const body = {
        service_id: import.meta.env.VITE_SERVICE_ID,
        template_id: import.meta.env.VITE_TEMPLATE_ID,
        user_id: import.meta.env.VITE_PUBLIC_KEY,
        template_params: data
    };

    try {

        const fetch = fetchData(url, 'POST', body);

        console.log(fetch);

    } catch (error) {
        
        console.log(error);

    };

};