import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Missions.css";

import shoreside from "../assets/map_shoreside_vale_1.png";
import staunton from "../assets/map_staunton_island_1.png";
import portland from "../assets/map_portland_1.png";

import luigi from "../assets/luigi_icon.png";
import joey from "../assets/joey_icon.png";
import toni from "../assets/toni_icon.png";
import salvatore from "../assets/salvatore_icon.png";
import asuka from "../assets/asuka_icon.png";
import kenji from "../assets/kenji_icon.png";
import ray from "../assets/ray_icon.png";
import donald from "../assets/donald_icon.png";
import catalina from "../assets/catalina_icon.png";

function Missions() {
    const [stateIcon, setIcon] = useState("iconsNone");

    return (
        <div className="missions">
            <section className="missionsTitle">
                <h1>Misiones principales</h1>
            </section>
            <section className="missionsMaps">
                <div className="shoreside">
                    <h2>Misiones de Shoreside Vale</h2>
                    <div className="mapAndIcons">
                        <img onClick={() => setIcon(1)} src={shoreside} alt="portland"></img>
                        <ul className={stateIcon === 1 ? "icons" : "iconsNone"}>
                            <li><NavLink to="/"><img src={donald} alt="icon"></img><p>Donald Love II</p></NavLink></li>
                            <li><NavLink to="/"><img src={ray} alt="icon"></img><p>Ray Machowski II</p></NavLink></li>
                            <li><NavLink to="/"><img src={asuka} alt="icon"></img><p>Asuka Kasen II</p></NavLink></li>
                            <li><NavLink to="/"><img src={catalina} alt="icon"></img><p>Catalina</p></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="staunton">
                    <h2>Misiones de Staunton Island</h2>
                    <div className="mapAndIcons">
                        <img onClick={() => setIcon(2)} src={staunton} alt="portland"></img>
                        <ul className={stateIcon === 2 ? "icons" : "iconsNone"}>
                            <li><NavLink to="/"><img src={asuka} alt="icon"></img><p>Asuka Kasen</p></NavLink></li>
                            <li><NavLink to="/"><img src={kenji} alt="icon"></img><p>Kenji Kasen</p></NavLink></li>
                            <li><NavLink to="/"><img src={ray} alt="icon"></img><p>Ray Machowski</p></NavLink></li>
                            <li><NavLink to="/"><img src={donald} alt="icon"></img><p>Donald Love</p></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="portland">
                    <h2>Misiones de Portland</h2>
                    <div className="mapAndIcons">
                        <img onClick={() => setIcon(3)} src={portland} alt="portland"></img>
                        <ul className={stateIcon === 3 ? "icons" : "iconsNone"}>
                            <li><NavLink to="/"><img src={luigi} alt="icon"></img><p>Luigi Goterelli</p></NavLink></li>
                            <li><NavLink to="/"><img src={joey} alt="icon"></img><p>Joey Leone</p></NavLink></li>
                            <li><NavLink to="/"><img src={toni} alt="icon"></img><p>Toni Cipriani</p></NavLink></li>
                            <li><NavLink to="/"><img src={salvatore} alt="icon"></img><p>Salvatore Leone</p></NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Missions;
