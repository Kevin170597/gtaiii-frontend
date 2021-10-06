import React, { useState } from 'react';
import Axios from "axios";

function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        Axios.post('https://gtaiii.herokuapp.com/users/register', {user: user, email: email, password: password})
        .then(alert("success"))
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name="name" placeholder="Nombre" onChange={(e) => setUser(e.target.value)}></input>
                <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" name="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}></input>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Register;
