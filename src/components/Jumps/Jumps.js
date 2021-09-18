import React, { useState } from 'react';
import "./Jumps.css";

import jumping from "../../assets/jump.png";

import Shoreside from "../../assets/jumps/jumps_shoreside.png";
import Staunton from "../../assets/jumps/jumps_staunton.png";
import Portland from "../../assets/jumps/jumps_portland.png";

import Loading from "../Loading/Loading";

function Jumps() {
    const [stateJumps, setJumps] = useState("");
    const [stateLoading, setLoading] = useState("");

    const [stateModal, setModal] = useState("");

    const [stateTooltip, setTooltip] = useState("");

    const getJumps = async (city) => {
        setJumps("");
        setLoading("loading");
        const jumpsData = await fetch(`https://gtaiii.herokuapp.com/jumps/${city}`);
        const jumps = await jumpsData.json();
        setJumps(jumps);
        setLoading("");
    }

    return (
        <div className="jumps">
            <section className="missionsTitle">
                <h1>Saltos únicos</h1>
            </section>
            <section className="jumpDescription">
                <div className="jumpIcon">
                    <figure>
                        <img src={jumping} alt=""></img>
                    </figure>
                </div>
                <div className="jumpsDescription">
                    <p>Por todo Liberty City hay repartidos un total de 100 paquetes, ocultos en los lugares más reconditos de las 3 islas. Su recolección es vital para conseguir el 100% del juego, y por cada 10 paquetes que consigamos recibiremos un premio en forma de arma o item en nuestros escondites. Cuando tengamos los 100 se nos recompensará con 1.000.000$.</p>
                </div>
            </section>
            <section className="jumpsContainer">
                <div className="jumpsMaps">
                    <div className="jumpsMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(1)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("shoreside")} src={Shoreside} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 1 ? "jumpsMapTooltip" : "jumpsMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "shoreside" ? "jumpsModalContainer" : "jumpsModalNone"}>
                            <div className="jumpsModal">
                                <i onClick={() => setModal("packageModalNone")} className="fas fa-times"></i>
                                <img src={Shoreside} alt=""></img>
                            </div>
                        </div>
                        <div className="jumpsInfo">
                            <h3>Saltos únicos de Shoreside Vale</h3>
                            <p>8 saltos</p>
                        </div>
                        <div className="openJumps">
                            <button onClick={() => getJumps("Shoreside Vale")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                    <div className="jumpsMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(2)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("staunton")} src={Staunton} alt="staunton_map"></img>
                        </figure>
                        <div className={stateTooltip === 2 ? "jumpsMapTooltip" : "jumpsMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "staunton" ? "jumpsModalContainer" : "jumpsModalNone"}>
                            <div className="jumpsModal">
                                <i onClick={() => setModal("packageModalNone")} className="fas fa-times"></i>
                                <img src={Staunton} alt=""></img>
                            </div>
                        </div>
                        <div className="jumpsInfo">
                            <h3>Saltos únicos de Staunton Island</h3>
                            <p>4 saltos</p>
                        </div>
                        <div className="openJumps">
                            <button onClick={() => getJumps("Staunton Island")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                    <div className="jumpsMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(3)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("portland")} src={Portland} alt="portland_map"></img>
                        </figure>
                        <div className={stateTooltip === 3 ? "jumpsMapTooltip" : "jumpsMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "portland" ? "jumpsModalContainer" : "jumpsModalNone"}>
                            <div className="jumpsModal">
                                <i onClick={() => setModal("packageModalNone")} className="fas fa-times"></i>
                                <img src={Portland} alt=""></img>
                            </div>
                        </div>
                        <div className="jumpsInfo">
                            <h3>Saltos únicos de Portland</h3>
                            <p>8 saltos</p>
                        </div>
                        <div className="openJumps">
                            <button onClick={() => getJumps("Portland")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="jumpsList" id="list">
                {stateJumps &&
                    stateJumps.map((jump) => 
                        <div className="jumpsCard" key={jump.id}>
                            <p>Salto {jump.name}</p>
                            <figure>
                                <img src={jump.screen} alt="jump"></img>
                            </figure>
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

export default Jumps;
