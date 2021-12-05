import React,{useState} from "react";

import './Login.css';

export default function Login(){

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    return(
        <section className="Login">
            <div className="container__login">
                <div className="containerForm">
                </div>
            </div>
        </section>
    )
}