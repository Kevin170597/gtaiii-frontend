import React from 'react';
import "../styles/Header.css";
import {NavLink} from "react-router-dom";

import logo from "../assets/logo.png"

function Header() {
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
                <i className="far fa-envelope"></i>
            </div>
        </div>
    )
}

export default Header;
