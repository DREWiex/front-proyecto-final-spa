import Cookies from 'universal-cookie';

export const setCookies = (name, value, options) => {

  const cookies = new Cookies();

  cookies.set(name, value, options);

}; //!FUNC-SETCOOKIES


export const removeCookies = (name) => {

  const cookies = new Cookies();

  cookies.remove(name);

}; //!FUNC-REMOVECOOKIES