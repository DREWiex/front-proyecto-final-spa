import Cookies from 'universal-cookie';
import PropTypes from 'prop-types';

/**
 * Guardar el token en una cookie.
 * @function setCookies
 * @param {String} name Nombre de la cookie.
 * @param {String} value Token del usuario.
 * @param {Object} options Propiedades de la cookie.
 */
export const setCookies = (name, value, options) => {

  const cookies = new Cookies();

  cookies.set(name, value, options);

}; //!FUNC-SETCOOKIES


/**
 * Eliminar el token de la cookie.
 * @function removeCookies
 * @param {String} name Nombre de la cookie.
 */
export const removeCookies = (name) => {

  const cookies = new Cookies();

  cookies.remove(name);

}; //!FUNC-REMOVECOOKIES


setCookies.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};

removeCookies.propTypes = {
  name: PropTypes.string.isRequired
};