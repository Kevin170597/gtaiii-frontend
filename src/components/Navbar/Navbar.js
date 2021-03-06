import React, {useState} from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

import map_icon from "../../assets/nav_icons/map_icon.png";
import gun_icon from "../../assets/nav_icons/guns_icon.png";
import band_icon from "../../assets/nav_icons/bands_icon.png";
import vehicle_icon from "../../assets/nav_icons/vehicles_icon.png";
import missions_icon from "../../assets/nav_icons/missions_icon.png";
import phone_icon from "../../assets/nav_icons/phone_icon.png";
import toy_icon from "../../assets/nav_icons/toy_icon.png";
import r3_icon from "../../assets/nav_icons/r3_icon.png";
import rampage_icon from "../../assets/nav_icons/rampage_icon.png";
import package_icon from "../../assets/nav_icons/package_icon.png";
import jumps_icon from "../../assets/nav_icons/ramp.png";
import garage_icon from "../../assets/nav_icons/garage_icon.png";

function Navbar() {
    const [stateTip, setTip] = useState("tooltipNone");
    const [stateMenu, setMenu] = useState(true);

    return (
        <nav>
            <section onClick={() => setMenu(!stateMenu)} className="burger">
                <i className="fas fa-bars"></i>
            </section>
            <section className={stateMenu ? "navLinks" : "navLinks2"}>
                <article className="closeMobile" onClick={() => setMenu(!stateMenu)}>
                    <i className="fas fa-times"></i>
                </article>
                <article className="topBorder" onMouseEnter={() => setTip(1)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/maps"><img src={map_icon} alt="icon"></img></NavLink>
                    <p>Mapa</p>
                    <div className={stateTip === 1 ? "tooltip " : "tooltipNone"}>Mapa</div>
                </article>
                <article onMouseEnter={() => setTip(2)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/itemsguns"><img src={gun_icon} alt="icon"></img></NavLink>
                    <p>Items</p>
                    <div className={stateTip === 2 ? "tooltip " : "tooltipNone"}>Items y Armas</div>
                </article>
                <article onMouseEnter={() => setTip(3)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/bands"><img src={band_icon} alt="icon"></img></NavLink>
                    <p>Bandas</p>
                    <div className={stateTip === 3 ? "tooltip " : "tooltipNone"}>Bandas</div>
                </article>
                <article onMouseEnter={() => setTip(4)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/vehicles"><img src={vehicle_icon} alt="icon"></img></NavLink>
                    <p>Vehicles</p>
                    <div className={stateTip === 4 ? "tooltip " : "tooltipNone"}>Vehiculos</div>
                </article>
                <article onMouseEnter={() => setTip(5)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/missions"><img src={missions_icon} alt="icon"></img></NavLink>
                    <p>Misiones</p>
                    <div className={stateTip === 5 ? "tooltip " : "tooltipNone"}>Misiones</div>
                </article>
                <article onMouseEnter={() => setTip(6)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/phones"><img src={phone_icon} alt="icon"></img></NavLink>
                    <p>Tel??fonos</p>
                    <div className={stateTip === 6 ? "tooltip " : "tooltipNone"}>Tel??fonos</div>
                </article>
                <article onMouseEnter={() => setTip(7)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/rc"><img src={toy_icon} alt="icon"></img></NavLink>
                    <p>RC & 4x4</p>
                    <div className={stateTip === 7 ? "tooltip " : "tooltipNone"}>RC Toyz y 4x4</div>
                </article>
                <article onMouseEnter={() => setTip(8)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/r3"><img src={r3_icon} alt="icon"></img></NavLink>
                    <p>R3</p>
                    <div className={stateTip === 8 ? "tooltip " : "tooltipNone"}>Misiones R3</div>
                </article>
                <article onMouseEnter={() => setTip(9)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/rampages"><img src={rampage_icon} alt="icon"></img></NavLink>
                    <p>Masacres</p>
                    <div className={stateTip === 9 ? "tooltip " : "tooltipNone"}>Masacres</div>
                </article>
                <article onMouseEnter={() => setTip(10)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/packages"><img src={package_icon} alt="icon"></img></NavLink>
                    <p>Paquetes</p>
                    <div className={stateTip === 10 ? "tooltip " : "tooltipNone"}>Paquetes ocultos</div>
                </article>
                <article onMouseEnter={() => setTip(11)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/jumps"><img src={jumps_icon} alt="icon"></img></NavLink>
                    <p>Saltos</p>
                    <div className={stateTip === 11 ? "tooltip " : "tooltipNone"}>Saltos ??nicos</div>
                </article>
                <article className="bottomBorder" onMouseEnter={() => setTip(12)} onMouseLeave={() => setTip("tooltipNone")} onClick={() => setMenu(!stateMenu)}>
                    <NavLink to="/garages"><img src={garage_icon} alt="icon"></img></NavLink>
                    <p>Garages</p>
                    <div className={stateTip === 12 ? "tooltip " : "tooltipNone"}>Garages exp/imp</div>
                </article>
            </section>            
        </nav>
    )
}

export default Navbar;
