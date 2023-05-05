
export const setLocal = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

}; //!FUNC-SETLOCAL


export const getLocal = (key) => {

    return JSON.parse(localStorage.getItem(key)) || [];

}; //!FUNC-GETLOCAL


export const clearLocal = () => {

    localStorage.clear();

}; //!FUNC-CLEARLOCAL