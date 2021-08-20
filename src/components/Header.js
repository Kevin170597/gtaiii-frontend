import React, {useState} from 'react';
import "../styles/Header.css";
import {NavLink} from "react-router-dom";

import logo from "../assets/logo.png";

function Header() {
    const [stateContact, setContact] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="logo"></img>
                </NavLink>
            </div>
            <div className="title">
                <h1>Grand Theft Auto: III</h1>
            </div>
            <div className="contact">
                <i onClick={() => setContact(!stateContact)} className="far fa-envelope"></i>
                <div className={stateContact ? "contactCardVisible" : "contactCardInvisible"}>
                    <h4>Contact me</h4>
                    <p>kevin170597@gmail.com</p>
                    <a href="https://www.instagram.com/kevin170597/"><i className="fab fa-instagram"></i>Kevin170597</a>
                    <a href="https://github.com/Kevin170597"><i className="fab fa-github"></i>Github</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
