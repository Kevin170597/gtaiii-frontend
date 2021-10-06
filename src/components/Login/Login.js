import React, { useState } from 'react';
import Axios from "axios";
import { Redirect } from "react-router-dom";

import Context from "../../Contexts/Context";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const login = React.useContext(Context);

    const submit = (e) => {
        e.preventDefault();
        Axios.post('https://gtaiii.herokuapp.com/users/login', {user: user, password: password})
        .then((response) => {
            console.log(response);
            window.location.reload(false);
        });
    };

    return (
        <div>
            {login && <Redirect to="/" />}
            <form onSubmit={submit}>
                <input type="text" name="name" placeholder="Nombre" onChange={(e) => setUser(e.target.value)}></input>
                <input type="password" name="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
