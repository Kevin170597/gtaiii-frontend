import React, { useState } from 'react';
import "./Garages.css";

import jumping from "../../assets/jump.png";

import Portland1 from "../../assets/garages/map_portland.png";
import Portland2 from "../../assets/garages/map_portland_2.png";
import Shoreside from "../../assets/garages/map_shoreside.png";

import portland_1 from "../../assets/garages/garage_portland_1.png";
import portland_2 from "../../assets/garages/garage_portland_2.png";
import shoreside from "../../assets/garages/garage_shoreside.png";


function Garages() {
    const [stateVehicles, setVehicles] = useState("");

    const [stateModal, setModal] = useState("");
    const [stateList, setList] = useState("");

    const getVehicles = async (e) => {
        setVehicles("");
        const vehiclesData = await fetch(`https://gtaiii.herokuapp.com/garage/${e}`);
        const vechicles = await vehiclesData.json();
        setVehicles(vechicles);
    }

    return (
        <div className="garages">
            <section className="missionsTitle">
                <h1>Garages importación/exportación</h1>
            </section>
            <section className="garageDescription">
                <div className="garagesDescription">
                    <p>Por todo Liberty City hay repartidos un total de 100 paquetes, ocultos en los lugares más reconditos de las 3 islas. Su recolección es vital para conseguir el 100% del juego, y por cada 10 paquetes que consigamos recibiremos un premio en forma de arma o item en nuestros escondites. Cuando tengamos los 100 se nos recompensará con 1.000.000$.</p>
                </div>
            </section>
            <section className="garagesContainer">
                <article className="garagelist">
                    <div className="garageCard">
                        <div className="garageMap">
                            <h1>Portland</h1>
                            <img onClick={() => setModal("portland_1")} src={Portland1} alt="map"></img>
                        </div>
                        <figure>
                            <img src={portland_1} alt="screenshot"></img>
                        </figure>
                        <div className="infoGarage">
                            <h1>Garage de Portland 1</h1>
                            <p>Este garaje se encuentra en el puerto de Portland, y tiene en la entrada una lista con los coches que debemos llevar. La lista es la siguiente (pulsa en el nombre de cada vehículo para ver una imagen suya):</p>
                        </div>
                        <div className={stateModal === "portland_1" ? "modalVisible" : "modalInvisible"}>
                            <div className="modalMap">
                                <i onClick={() => setModal("modalInvisible")} className="fas fa-times"></i>
                                <img src={Portland1} alt="map"></img>
                            </div>
                        </div>
                    </div>
                    <div className="carsList">
                        <div className={stateList === "portland_1" ? "garageList" : "garageListNone"}>
                            {stateVehicles &&
                                stateVehicles.map((vehicle) =>
                                    <div className="vehiclesCard" key={vehicle.id}>
                                        <h1>{vehicle.name}</h1>
                                        <figure>
                                            <img src={vehicle.image} alt="car"></img>
                                        </figure>
                                    </div>
                                ) 
                            } {!stateVehicles &&
                                <p>loading</p>
                            }
                        </div>
                        <div onClick={() => getVehicles("portland_1")} className="openList">
                            <button onClick={() => setList(stateList === "portland_1" ? "" : "portland_1")}><i className="fas fa-grip-lines"></i></button>
                        </div>
                    </div>
                </article>
                <article className="garagelist">
                    <div className="garageCard">
                        <div className="garageMap">
                            <h1>Portland</h1>
                            <img onClick={() => setModal("portland_2")} src={Portland2} alt="map"></img>
                        </div>
                        <figure>
                            <img src={portland_2} alt="screenshot"></img>
                        </figure>
                        <div className="infoGarage">
                            <h1>Garage de Portland 2</h1>
                            <p>Este no es un garaje propiamente dicho, sino que se trata de una grúa, que colocando los coches correspondientes los recoge y se los lleva al barco. Está situada en el puerto, detrás del primer garaje de Portland. La lista de vehículos que hay que llevar es la siguiente (pulsa en el nombre de cada uno para ver su aspecto):</p>
                        </div>
                        <div className={stateModal === "portland_2" ? "modalVisible" : "modalInvisible"}>
                            <div className="modalMap">
                                <i onClick={() => setModal("modalInvisible")} className="fas fa-times"></i>
                                <img src={Portland2} alt="map"></img>
                            </div>
                        </div>
                    </div>
                    <div className="carsList">
                        <div className={stateList === "portland_2" ? "garageList" : "garageListNone"}>
                            {stateVehicles &&
                                stateVehicles.map((vehicle) =>
                                    <div className="vehiclesCard" key={vehicle.id}>
                                        <h1>{vehicle.name}</h1>
                                        <figure>
                                            <img src={vehicle.image} alt="car"></img>
                                        </figure>
                                    </div>
                                ) 
                            } {!stateVehicles &&
                                <p>loading</p>
                            }
                        </div>
                        <div onClick={() => getVehicles("portland_2")} className="openList">
                            <button onClick={() => setList(stateList === "portland_2" ? "" : "portland_2")}><i className="fas fa-grip-lines"></i></button>
                        </div>
                    </div>
                </article>
                <article className="garagelist">
                    <div className="garageCard">
                        <div className="garageMap">
                            <h1>Shoreside Vale</h1>
                            <img onClick={() => setModal("shoreside")} src={Shoreside} alt="map"></img>
                        </div>
                        <figure>
                            <img src={shoreside} alt="screenshot"></img>
                        </figure>
                        <div className="infoGarage">
                            <h1>Garage de Shoreside Vale</h1>
                            <p>El garaje de Shoreside Vale se encuentra al norte de Cala de la Cúspide. La lista de coches que hay que llevar es la siguiente (pincha en cada nombre para ver una imagen del vehículo):</p>
                        </div>
                        <div className={stateModal === "shoreside" ? "modalVisible" : "modalInvisible"}>
                            <div className="modalMap">
                                <i onClick={() => setModal("modalInvisible")} className="fas fa-times"></i>
                                <img src={Shoreside} alt="map"></img>
                            </div>
                        </div>
                    </div>
                    <div className="carsList">
                        <div className={stateList === "shoreside" ? "garageList" : "garageListNone"}>
                            {stateVehicles &&
                                stateVehicles.map((vehicle) =>
                                    <div className="vehiclesCard" key={vehicle.id}>
                                        <h1>{vehicle.name}</h1>
                                        <figure>
                                            <img src={vehicle.image} alt="car"></img>
                                        </figure>
                                    </div>
                                ) 
                            } {!stateVehicles &&
                                <p>loading</p>
                            }
                        </div>
                        <div onClick={() => getVehicles("shoreside")} className="openList">
                            <button onClick={() => setList(stateList === "shoreside" ? "" : "shoreside")}><i className="fas fa-grip-lines"></i></button>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Garages;
