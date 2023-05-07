
export const fetchData = async (url, method, body = {}) => {

    let options = {};

    if(method == 'POST' || method == 'PUT'){

        const data = {...body}; // spread de todos los inputs del form

        options = {
            method,
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'force-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        };

    };

    if(method == 'DELETE'){

        options = { method }

    };


    try {

        const request = await fetch(url, options);

        const response = await request.json();

        if(response.ok) return response;

        else throw {
            ok: false,
            response
        }
        
    } catch (error) {

        return error;
        
    };

};