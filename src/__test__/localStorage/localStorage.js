
export const setLocal = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));

    if(!key || !value) return undefined;

    else return true;

}; //!FUNC-SETLOCAL