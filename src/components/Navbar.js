import React, {useState} from 'react';
import "../styles/Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    const [stateTip, setTip] = useState("tooltipNone");

    return (
        <div className="navbar">
            <div className="links">
                <div onMouseEnter={() => setTip(1)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/maps">1</NavLink>
                    <div className={stateTip === 1 ? "tooltip " : "tooltipNone"}>Mapa</div>
                </div>
                <div onMouseEnter={() => setTip(2)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/itemsguns">2</NavLink>
                    <div className={stateTip === 2 ? "tooltip " : "tooltipNone"}>Items y Armas</div>
                </div>
                <div onMouseEnter={() => setTip(3)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/bands">3</NavLink>
                    <div className={stateTip === 3 ? "tooltip " : "tooltipNone"}>Bandas</div>
                </div>
                <div onMouseEnter={() => setTip(4)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/vehicles">4</NavLink>
                    <div className={stateTip === 4 ? "tooltip " : "tooltipNone"}>Vehiculos</div>
                </div>
                <div onMouseEnter={() => setTip(5)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">5</NavLink>
                    <div className={stateTip === 5 ? "tooltip " : "tooltipNone"}>Misiones</div>
                </div>
                <div onMouseEnter={() => setTip(6)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">6</NavLink>
                    <div className={stateTip === 6 ? "tooltip " : "tooltipNone"}>Teléfonos</div>
                </div>
                <div onMouseEnter={() => setTip(7)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">7</NavLink>
                    <div className={stateTip === 7 ? "tooltip " : "tooltipNone"}>RC Toyz y 4x4</div>
                </div>
                <div onMouseEnter={() => setTip(8)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">8</NavLink>
                    <div className={stateTip === 8 ? "tooltip " : "tooltipNone"}>Misiones R3</div>
                </div>
                <div onMouseEnter={() => setTip(9)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">9</NavLink>
                    <div className={stateTip === 9 ? "tooltip " : "tooltipNone"}>Masacres</div>
                </div>
                <div onMouseEnter={() => setTip(10)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">10</NavLink>
                    <div className={stateTip === 10 ? "tooltip " : "tooltipNone"}>Paquetes ocultos</div>
                </div>
                <div onMouseEnter={() => setTip(11)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">11</NavLink>
                    <div className={stateTip === 11 ? "tooltip " : "tooltipNone"}>Saltos únicos</div>
                </div>
                <div onMouseEnter={() => setTip(12)} onMouseLeave={() => setTip("tooltipNone")} className="link">
                    <NavLink to="/">12</NavLink>
                    <div className={stateTip === 12 ? "tooltip " : "tooltipNone"}>Garages exp/imp</div>
                </div>
            </div>            
        </div>
    )
}

export default Navbar;
