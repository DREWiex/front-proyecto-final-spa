import { useState } from "react";

export const useForm = (initialState) => {

    const [ form, setForm ] = useState(initialState);

    const [ body, setBody ] = useState({});

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
            [name]: value
        });

    }; //FUNC-HANDLECHANGE


    const handleSubmit = (ev) => {

        ev.preventDefault();

        const data = serializeForm(ev.target);

        setBody(data);

        setSent(true);

    }; //FUNC-HANDLESUBMIT


    return{
        body,
        sent,
        handleSubmit,
        handleChange
    };

};