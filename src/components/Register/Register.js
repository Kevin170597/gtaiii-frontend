import React, { useState } from 'react';
import Axios from "axios";
import "./Register.css";
import { Redirect } from "react-router-dom";

import Context from '../../Contexts/Context';

function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const login = React.useContext(Context);

    const [validator, setValidator] = useState("");

    const submit = (e) => {
        e.preventDefault();
        Axios.post('https://gtaiii.herokuapp.com/users/register', {user: user, email: email, password: password, password2: password2})
        .then((response) => {
            //console.log(response)
            response.data.success ? window.location.href = "/login" : setValidator(response.data)
        });
    };

    return (
        <div className="registerContainer">
            {login && <Redirect to="/" />}
            <div className="formRegisterContainer">
                <h1>Registrate</h1>
                <form onSubmit={submit}>
                    <input className={validator.user ? "userErr" : ""} autoComplete="off" type="text" name="name" placeholder="Nombre" onChange={(e) => setUser(e.target.value)}></input>
                    <small>{validator.user ? validator.user.msg : "" }</small>
                    <input className={validator.email ? "emailErr" : ""} autoComplete="off" type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <small>{validator.email ? validator.email.msg : "" }</small>
                    <input className={validator.password ? "passErr" : ""} type="password" name="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}></input>
                    <small>{validator.password ? validator.password.msg : "" }</small>
                    <input className={validator.password2 ? "pass2Err" : ""} type="password" name="password2" placeholder="Repetir contraseña" onChange={(e) => setPassword2(e.target.value)}></input>
                    <small>{validator.password2 ? validator.password2.msg : "" }</small>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
