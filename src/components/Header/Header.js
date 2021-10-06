import React, {useState} from 'react';
import "./Header.css";
import {NavLink} from "react-router-dom";
import Axios from "axios";

import logo from "../../assets/logo.png";

import Context from "../../Contexts/Context";

function Header() {
    const [stateContact, setContact] = useState(false);
    const [stateUser, setUser] = useState(false);

    const user = React.useContext(Context);

    const logout = async () => {
        await Axios.get("https://gtaiii.herokuapp.com/users/logout")
        .then(response => console.log(response))
        .then(window.location.reload(false))
    }

    return (
        <header>
            <section className="logo">
                <NavLink to="/">
                    <img src={logo} alt="logo"></img>
                </NavLink>
            </section>
            <section className="title">
                <h1>Grand Theft Auto: III</h1>
            </section>
            <section className="user">
                <div className="userButton">
                    <i onClick={() => setUser(!stateUser)} className="far fa-user"></i>
                </div>
                <article className={stateUser ? "userCardVisible" : "userCardInvisible"}>
                    {user &&
                        <div className="userInfo"> 
                            <h4>{user.name}</h4>
                            <b>{user.email}</b>
                            <p onClick={logout}>Cerrar sesión</p>
                        </div>
                    } {!user &&
                        <div className="userOptions">
                            <NavLink to="/login">Iniciar sesión</NavLink>
                            <NavLink to="/register">Registrate</NavLink>
                        </div>
                    }
                </article>
            </section>
            <section className="contact">
                <div className="contactButton">
                    <i onClick={() => setContact(!stateContact)} className="far fa-envelope"></i>
                </div>
                <article className={stateContact ? "contactCardVisible" : "contactCardInvisible"}>
                    <h4>Contacto</h4>
                    <p>kevin170597@gmail.com</p>
                    <a href="https://www.instagram.com/kevin170597/"><i className="fab fa-instagram"></i>Kevin170597</a>
                    <a href="https://github.com/Kevin170597"><i className="fab fa-github"></i>Github</a>
                </article>
            </section>
        </header>
    )
}

export default Header;
