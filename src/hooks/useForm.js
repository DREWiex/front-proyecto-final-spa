import { useState } from "react";

export const useForm = (initialState) => {

    const [ form, setForm ] = useState(initialState);

    const [ sent, setSent ] = useState(false);


    const serializeForm = (values) => {

        const formData = new FormData(values);

        const data = {};

        for(let [key, value] of formData){
            data[key] = value;
        };

        return data;

    }; //FUNC-SERIALIZEFORM


    const handleChange = ({target}) => {

        const { name, value } = target;

        if(form == '') return;

        setForm({
            ...form,
            [name]: value // [name] escucha los atributos 'name' del form (sin [] sería el 'key'; por ej., 'email')
        });

    }; //FUNC-HANDLECHANGE


    const handleSubmit = (ev) => {

        ev.preventDefault();

        const data = serializeForm(ev.target);

        setForm(data);

        setSent(true);

    }; //FUNC-HANDLESUBMIT


    return{
        form,
        sent,
        handleSubmit,
        handleChange
    };

};