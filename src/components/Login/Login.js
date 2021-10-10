import React, { useState } from 'react';
import Axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import "./Login.css";

import Context from "../../Contexts/Context";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const login = React.useContext(Context);

    const [validator, setValidator] = useState("");

    const submit = (e) => {
        e.preventDefault();
        Axios.post('https://gtaiii.herokuapp.com/users/login', {user: user, password: password})
        .then((response) => {
            response.data.success ? window.location.href = "/" : setValidator(response.data)
        });
    };

    return (
        <div className="loginContainer">
            {login && <Redirect to="/" />}
            <div className="formLoginContainer">
                <h1>Iniciar sesión</h1>
                <form onSubmit={submit}>
                    <input autoComplete="off" type="text" name="user" placeholder="Nombre" onChange={(e) => setUser(e.target.value)}></input>
                    <small>{validator.user ? validator.user.msg : ""}</small>
                    <input type="password" name="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}></input>
                    <small>{validator.password ? validator.password.msg : ""}</small>
                    <button>Iniciar sesión</button>
                </form>
                <p>¿Primera vez aquí? <NavLink to="/register">Registrate.</NavLink></p>
            </div>
        </div>
    )
}

export default Login;
