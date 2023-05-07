
/**
 * Guardar los datos del usuario en el localStorage.
 * @function setLocal
 * @param {String} key Nombre de la clave.
 * @param {Object} value Valor de la clave.
 */
export const setLocal = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}; //!FUNC-SETLOCAL

/**
 * Recibir los datos del usuario guardados en el localStorage.
 * @function getLocal
 * @param {String} key Nombre de la clave.
 * @returns El valor de la clave o, en su defecto, un array vacío.
 */
export const getLocal = (key) => {

    return JSON.parse(localStorage.getItem(key)) || [];

}; //!FUNC-GETLOCAL

/**
 * Eliminar los datos del usuario guardados en el localStorage.
 * @function clearLocal
 */
export const clearLocal = () => {

    localStorage.clear();

}; //!FUNC-CLEARLOCAL