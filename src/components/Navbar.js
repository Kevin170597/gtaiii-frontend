import React, {useState} from 'react';
import "../styles/Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    const [stateTip, setTip] = useState("tooltipNone");

    return (
        <nav>
            <section>
                <article onMouseEnter={() => setTip(1)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/maps">1</NavLink>
                    <div className={stateTip === 1 ? "tooltip " : "tooltipNone"}>Mapa</div>
                </article>
                <article onMouseEnter={() => setTip(2)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/itemsguns">2</NavLink>
                    <div className={stateTip === 2 ? "tooltip " : "tooltipNone"}>Items y Armas</div>
                </article>
                <article onMouseEnter={() => setTip(3)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/bands">3</NavLink>
                    <div className={stateTip === 3 ? "tooltip " : "tooltipNone"}>Bandas</div>
                </article>
                <article onMouseEnter={() => setTip(4)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/vehicles">4</NavLink>
                    <div className={stateTip === 4 ? "tooltip " : "tooltipNone"}>Vehiculos</div>
                </article>
                <article onMouseEnter={() => setTip(5)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">5</NavLink>
                    <div className={stateTip === 5 ? "tooltip " : "tooltipNone"}>Misiones</div>
                </article>
                <article onMouseEnter={() => setTip(6)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">6</NavLink>
                    <div className={stateTip === 6 ? "tooltip " : "tooltipNone"}>Teléfonos</div>
                </article>
                <article onMouseEnter={() => setTip(7)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">7</NavLink>
                    <div className={stateTip === 7 ? "tooltip " : "tooltipNone"}>RC Toyz y 4x4</div>
                </article>
                <article onMouseEnter={() => setTip(8)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">8</NavLink>
                    <div className={stateTip === 8 ? "tooltip " : "tooltipNone"}>Misiones R3</div>
                </article>
                <article onMouseEnter={() => setTip(9)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">9</NavLink>
                    <div className={stateTip === 9 ? "tooltip " : "tooltipNone"}>Masacres</div>
                </article>
                <article onMouseEnter={() => setTip(10)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">10</NavLink>
                    <div className={stateTip === 10 ? "tooltip " : "tooltipNone"}>Paquetes ocultos</div>
                </article>
                <article onMouseEnter={() => setTip(11)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">11</NavLink>
                    <div className={stateTip === 11 ? "tooltip " : "tooltipNone"}>Saltos únicos</div>
                </article>
                <article onMouseEnter={() => setTip(12)} onMouseLeave={() => setTip("tooltipNone")}>
                    <NavLink to="/">12</NavLink>
                    <div className={stateTip === 12 ? "tooltip " : "tooltipNone"}>Garages exp/imp</div>
                </article>
            </section>            
        </nav>
    )
}

export default Navbar;
