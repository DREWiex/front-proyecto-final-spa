import PropTypes from 'prop-types';

/**
 * 
 * @param {String} url URL de la API
 * @param {String} [method] Método que recibe la API
 * @param {Object} [body={}] Objeto que recibe la API
 * @returns {Promise}
 */
export const fetchData = async (url, method, body = {}) => {

    let options = {};

    if(method == 'POST' || method == 'PUT'){

        const data = {...body}; // spread de todas las propiedades que recibe el objeto 'body'

        /**
         * Opciones que recibe el fetch y que este envía a la API
         * @typedef {Object} options
         * @property {String} method Método que recibe la API.
         * @property {String} body Objeto 'body' convertido a string.
         * @property {String} mode Intercambio de recursos de origen cruzado (CORS).
         * @property {String} cache El navegador busca una solicitud coincidente en su caché HTTP.
         * @property {Object} headers Metadatos adicionales que se mandan a la API para ayudar al servidor a comprender qué tipo de solicitud se está mandando, en este caso, “content-type” (tipo de contenido).
         */
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

        return response;
        
    } catch (error) {

        console.log('FETCH ERROR:', error);
        
    };

};

fetchData.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string,
    body: PropTypes.object
};