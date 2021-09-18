import React, { useState } from 'react';
import "./Packages.css";

import packages from "../../assets/items_package.png";

import Shoreside from "../../assets/packages/package_shoreside.png";
import Staunton from "../../assets/packages/package_staunton.png";
import Portland from "../../assets/packages/package_portland.png";

import Loading from "../Loading/Loading";

import Pistol from "../../assets/packages/packages_rewards/package_pistol.png";
import Uzi from "../../assets/packages/packages_rewards/package_uzi.png";
import Granade from "../../assets/packages/packages_rewards/package_granade.png";
import Shotgun from "../../assets/packages/packages_rewards/package_shotgun.png";
import Armor from "../../assets/packages/packages_rewards/item_armor.png";
import Molotov from "../../assets/packages/packages_rewards/package_molotov.png";
import Ak47 from "../../assets/packages/packages_rewards/package_ak47.png";
import Rifle from "../../assets/packages/packages_rewards/package_rifle.png";
import M16 from "../../assets/packages/packages_rewards/package_m16.png";
import Rocket from "../../assets/packages/packages_rewards/package_rocket.png";

function Packages() {
    const [statePackages, setPackages] = useState("");
    const [stateLoading, setLoading] = useState("");

    const [stateModal, setModal] = useState("");

    const [stateTooltip, setTooltip] = useState("");

    const getPackages = async (city) => {
        setPackages("");
        setLoading("loading");
        const packagesData = await fetch(`https://gtaiii.herokuapp.com/packages/${city}`);
        const packages = await packagesData.json();
        setPackages(packages);
        setLoading("");
    }

    return (
        <div className="packages">
            <section className="missionsTitle">
                <h1>Paquetes ocultos</h1>
            </section>
            <section className="packagesDescription">
                <div className="packageIcon">
                    <figure>
                        <img src={packages} alt=""></img>
                    </figure>
                </div>
                <div className="packageDescription">
                    <p>Por todo Liberty City hay repartidos un total de 100 paquetes, ocultos en los lugares más reconditos de las 3 islas. Su recolección es vital para conseguir el 100% del juego, y por cada 10 paquetes que consigamos recibiremos un premio en forma de arma o item en nuestros escondites. Cuando tengamos los 100 se nos recompensará con 1.000.000$.</p>
                </div>
            </section>
            <section className="packagesRewards">
                <h2>Premios:</h2>
                <ul>
                    <li><img src={Pistol} alt="reward"></img><p>10 - Pistola</p></li>
                    <li><img src={Uzi} alt="reward"></img><p>20 - Uzi</p></li>
                    <li><img src={Granade} alt="reward"></img><p>30 - Granadas</p></li>
                    <li><img src={Shotgun} alt="reward"></img><p>40 - Escopeta</p></li>
                    <li><img src={Armor} alt="reward"></img><p>50 - Escudo</p></li>
                    <li><img src={Molotov} alt="reward"></img><p>60 - Molotov</p></li>
                    <li><img src={Ak47} alt="reward"></img><p>70 - AK-47</p></li>
                    <li><img src={Rifle} alt="reward"></img><p>80 - Rifle</p></li>
                    <li><img src={M16} alt="reward"></img><p>90 - M-16</p></li>
                    <li><img src={Rocket} alt="reward"></img><p>100 - Lanzacohetes</p></li>
                </ul>
            </section>
            <section className="packagesContainer">
                <div className="packagesMaps">
                    <div className="packageMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(1)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("shoreside")} src={Shoreside} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 1 ? "packageMapTooltip" : "packageMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "shoreside" ? "packageModalContainer" : "packageModalNone"}>
                            <div className="packageModal">
                                <i onClick={() => setModal("packageModalNone")} className="fas fa-times"></i>
                                <img src={Shoreside} alt=""></img>
                            </div>
                        </div>
                        <div className="packageInfo">
                            <h3>Paquetes ocultos de Shoreside Vale</h3>
                            <p>31 paquetes</p>
                        </div>
                        <div className="openPackage">
                            <button onClick={() => getPackages("Shoreside Vale")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                    <div className="packageMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(2)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("staunton")} src={Staunton} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 2 ? "packageMapTooltip" : "packageMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "staunton" ? "packageModalContainer" : "packageModalNone"}>
                            <div className="packageModal">
                                <i onClick={() => setModal("packageModalNone")} className="fas fa-times"></i>
                                <img src={Staunton} alt=""></img>
                            </div>
                        </div>
                        <div className="packageInfo">
                            <h3>Paquetes ocultos de Staunton Island</h3>
                            <p>36 paquetes</p>
                        </div>
                        <div className="openPackage">
                            <button onClick={() => getPackages("Staunton Island")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                    <div className="packageMap">
                        <figure>
                            <img onMouseEnter={() => setTooltip(3)} onMouseLeave={() => setTooltip("")} onClick={() => setModal("portland")} src={Portland} alt=""></img>
                        </figure>
                        <div className={stateTooltip === 3 ? "packageMapTooltip" : "packageMapTooltipNone"}>
                            <p>Ver mapa</p>
                        </div>
                        <div className={stateModal === "portland" ? "packageModalContainer" : "packageModalNone"}>
                            <div className="packageModal">
                                <i onClick={() => setModal("packageModalNone")} className="fas fa-times"></i>
                                <img src={Portland} alt=""></img>
                            </div>
                        </div>
                        <div className="packageInfo">
                            <h3>Paquetes ocultos de Portland</h3>
                            <p>33 paquetes</p>
                        </div>
                        <div className="openPackage">
                            <button onClick={() => getPackages("Portland")}><a href="#list"><i className="fas fa-grip-lines"></i></a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="packagesList" id="list">
                {statePackages &&
                    statePackages.map((packages) => 
                        <div className="packagesCard" key={packages.id}>
                            <p>Paquete {packages.id}</p>
                            <figure>
                                <img src={packages.screen} alt="package"></img>
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

export default Packages;
