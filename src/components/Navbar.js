import React from 'react';
import "../styles/Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <ul>
            <NavLink to="/">1</NavLink>
            <NavLink to="/maps">2</NavLink>
            <NavLink to="/itemsguns">3</NavLink>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            </ul>
        </div>
    )
}

export default Navbar;
