import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Missions.css";

import shoreside from "../../assets/maps/map_shoreside_vale_1.png";
import staunton from "../../assets/maps/map_staunton_island_1.png";
import portland from "../../assets/maps/map_portland_1.png";

import luigi from "../../assets/missions_icons/luigi_icon.png";
import joey from "../../assets/missions_icons/joey_icon.png";
import toni from "../../assets/missions_icons/toni_icon.png";
import salvatore from "../../assets/missions_icons/salvatore_icon.png";
import asuka from "../../assets/missions_icons/asuka_icon.png";
import kenji from "../../assets/missions_icons/kenji_icon.png";
import ray from "../../assets/missions_icons/ray_icon.png";
import donald from "../../assets/missions_icons/donald_icon.png";
import catalina from "../../assets/missions_icons/catalina_icon.png";

function Missions(props) {
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
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Donald Love II", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_donald_love.png"})}>
                                    <img src={donald} alt="icon"></img>
                                    <p>Donald Love II</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Ray Machowski II", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_ray_machowski.png"})}>
                                    <img src={ray} alt="icon"></img>
                                    <p>Ray Machowski II</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Asuka Kasen II", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_asuka_kasen.png"})}>
                                    <img src={asuka} alt="icon"></img>
                                    <p>Asuka Kasen II</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Catalina", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/shoreside_vale_catalina.png"})}>
                                    <img src={catalina} alt="icon"></img>
                                    <p>Catalina</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="staunton">
                    <h2>Misiones de Staunton Island</h2>
                    <div className="mapAndIcons">
                        <img onClick={() => setIcon(2)} src={staunton} alt="portland"></img>
                        <ul className={stateIcon === 2 ? "icons" : "iconsNone"}>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Asuka Kasen", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_asuka_kasen.png"})}>
                                    <img src={asuka} alt="icon"></img>
                                    <p>Asuka Kasen</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Kenji Kasen", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_kenji_kasen.png"})}>
                                    <img src={kenji} alt="icon"></img>
                                    <p>Kenji Kasen</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Ray Machowski", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_ray_machowski.png"})}>
                                    <img src={ray} alt="icon"></img>
                                    <p>Ray Machowski</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Donald Love", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/staunton_donald_love.png"})}>
                                    <img src={donald} alt="icon"></img>
                                    <p>Donald Love</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="portland">
                    <h2>Misiones de Portland</h2>
                    <div className="mapAndIcons">
                        <img onClick={() => setIcon(3)} src={portland} alt="portland"></img>
                        <ul className={stateIcon === 3 ? "icons" : "iconsNone"}>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Luigi Goterelli", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/portland_luigi.png"})}>
                                    <img src={luigi} alt="icon"></img>
                                    <p>Luigi Goterelli</p>
                                </NavLink></li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Joey Leone", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/portland_joey_leone.png"})}>
                                    <img src={joey} alt="icon"></img>
                                    <p>Joey Leone</p>
                                </NavLink></li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Toni Cipriani", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/portland_toni_cipriani.png"})}>
                                    <img src={toni} alt="icon"></img>
                                    <p>Toni Cipriani</p>
                                </NavLink></li>
                            <li>
                                <NavLink to="/missionowner" onClick={() => props.owner({name:"Salvatore Leone", image:"https://raw.githubusercontent.com/Kevin170597/gtaiii-images/master/misions/portland_leone_salvatore.png"})}>
                                    <img src={salvatore} alt="icon"></img>
                                    <p>Salvatore Leone</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Missions;
