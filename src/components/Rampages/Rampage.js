import React, { useState } from 'react';
import "./Rampage.css";

import Loading from "../Loading/Loading";

import rampagesIcon from "../../assets/rampages/items_skull.png";

import Portland from "../../assets/rampages/rampage_portland.png";
import Staunton from "../../assets/rampages/rampage_staunton.png";
import Shoreside from "../../assets/rampages/rampage_shoreside.png";

import location from "../../assets/masacre_shoreside_3a.jpg"; 

function Rampage() {
    const [stateRampages, setRampages] = useState("");
    const [stateLoading, setLoading] = useState("");

    const [stateModal, setModal] = useState("");

    const [stateTooltip, setTooltip] = useState("");

    const getRampages = async (city) => {
        setRampages("");
        setLoading("loading");
        const rampageData = await fetch(`https://gtaiii.herokuapp.com/rampages/${city}`);
        const rampage = await rampageData.json();
        setRampages(rampage);
        setLoading("");
    }

    return (
        <div className="rampages">
            <section className="missionsTitle">
                <h1>Masacres</h1>
            </section>
            <section className="rampageDescription">
                <div className="rampagesIcon">
                    <figure>
                        <img src={rampagesIcon} alt=""></img>
                    </figure>
                </div>
                <div className="rampagesDescription">
                    <p>Las masacres están marcadas con el icono de una calavera, y están repartidas por todo Liberty City, haciendo un total de 20. Son misiones en donde, generalmente, se nos dará un arma con munición infinita, y con ella deberemos matar o destruir un determinado número de personas o vehículos en 2 minutos de tiempo. Si fracasamos en nuestro primer intento, la localización del icono cambiará a otro lugar, quedándose ya allí para siempre. Una vez superemos las 20 masacres se nos recompensará con 1.000.000$</p>
                </div>
            </section>
            <section className="rampagesContainer">
                <div className="rampagesMaps">
                    <div className="rampageMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(1)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("shoreside")} src={Shoreside} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 1 ? "rampMapTooltip" : "rampMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "shoreside" ? "rampageModalContainer" : "rampageModalNone"}>
                            <div className="rampageModal">
                                <i onClick={() => setModal("rampageModalNone")} className="fas fa-times"></i>
                                <img src={Shoreside} alt=""></img>
                            </div>
                        </div>
                        <div className="rampageInfo">
                            <h1>Masacres de Shoreside Vale</h1>
                            <p>7 Masacres</p>
                        </div>
                        <div className="openRampage">
                            <button onClick={() => getRampages("Shoreside Vale")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                    <div className="rampageMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(2)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("staunton")} src={Staunton} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 2 ? "rampMapTooltip" : "rampMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "staunton" ? "rampageModalContainer" : "rampageModalNone"}>
                            <div className="rampageModal">
                                <i onClick={() => setModal("rampageModalNone")} className="fas fa-times"></i>
                                <img src={Staunton} alt=""></img>
                            </div>
                        </div>
                        <div className="rampageInfo">
                            <h1>Masacres de Staunton Island</h1>
                            <p>7 Masacres</p>
                        </div>
                        <div className="openRampage">
                            <button onClick={() => getRampages("Staunton Island")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                    <div className="rampageMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(3)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("portland")} src={Portland} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 3 ? "rampMapTooltip" : "rampMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "portland" ? "rampageModalContainer" : "rampageModalNone"}>
                            <div className="rampageModal">
                                <i onClick={() => setModal("rampageModalNone")} className="fas fa-times"></i>
                                <img src={Portland} alt=""></img>
                            </div>
                        </div>
                        <div className="rampageInfo">
                            <h1>Masacres de Portland</h1>
                            <p>6 Masacres</p>
                        </div>
                        <div className="openRampage">
                            <button onClick={() => getRampages("Portland")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rampagesList" id="list">
                {stateRampages &&
                    stateRampages.map((rampage) =>
                        <div className="rampagesCard">
                            <div className="rampageCardInfo">
                                <h2>Masacre {rampage.name}</h2>
                                <p>Ciudad: {rampage.city}</p>
                                <p>Arma: {rampage.gun}</p>
                                <p>Tiempo: {rampage.time}</p>
                            </div>
                            <div className="location">
                                <figure>
                                    <img src={location} alt=""></img>
                                </figure>
                                <div className="locationInfo">
                                    <h3>Ubicación A</h3>
                                    <p>{rampage.location_a}</p>
                                </div>
                            </div>
                            <div className="location">
                                <figure>
                                    <img src={location} alt=""></img>
                                </figure>
                                <div className="locationInfo">
                                    <h3>Ubicación B</h3>
                                    <p>{rampage.location_b}</p>
                                </div>
                            </div>
                        </div>
                    )
                } 
                {stateLoading === "loading" &&
                    <Loading />
                }
            </section>
        </div>
    )
}

export default Rampage;
