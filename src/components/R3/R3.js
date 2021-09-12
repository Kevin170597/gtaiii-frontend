import React from 'react';
import "./R3.css";

import Taxi from "../../assets/r3/r3_vehicles/taxi.png";
import Ambulance from "../../assets/r3/r3_vehicles/ambulance.png";
import Police from "../../assets/r3/r3_vehicles/police.png";
import Firetruck from "../../assets/r3/r3_vehicles/firetruck.png";

import taxiReward from "../../assets/r3/r3_rewards/borgnine.png";
import ambulanceReward from "../../assets/r3/r3_rewards/item_health.png";
import policeReward from "../../assets/r3/r3_rewards/item_star.png";
import firetruckReward from "../../assets/r3/r3_rewards/guns_fire.png";

function R3() {
    return (
        <div className="r3">
            <section className="missionsTitle">
                <h1>Misiones R3</h1>
            </section>
            <section className="r3Description">
                <p>Estas misiones se activan al subirse a un taxi, una ambulancia, un coche de policía o un camión de bomberos, y pulsar el botón "R3" (apretar el stick analógico derecho) del Dual Shock. En ellas deberemos realizar las funciones de taxista, paramédico, policía o bombero, dependiendo del vehículo en el que estemos. Son esenciales si queremos completar el 100% del juego, y nos ofrecen suculentas recompensas si conseguimos completarlas con éxito. A continuación se explican cada una de ellas.</p>
            </section>
            <section className="r3Cards">
                <article>
                    <div className="r3Title">
                        <h4>Taxista</h4>
                        <figure>
                            <img src={Taxi} alt=""></img>
                        </figure>
                    </div>
                    <div className="r3Guide">
                        <h5>Guía:</h5>
                        <p>Las misiones de taxista se activan al subirse a cualquiera de los 2 tipos de taxi que hay en Liberty City (taxi y cabbie). Tienes que recoger a 100 pasajeros, en cualquiera de las 3 islas, para completar la misión. No hace falta que sean los 100 seguidos, ya que son acumulativos.</p>
                    </div>
                    <div className="r3Reward">
                        <div className="r3RewardTitle">
                            <h4>Recompensa:</h4>
                            <p>El premio es un nuevo tipo de taxi, el "Borgnine" que encontrarás al norte de Portland, aparcado cerca del edificio de Head Radio.</p>
                        </div>
                        <div className="r3RewardImage">
                            <img src={taxiReward} alt=""></img>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="r3Title">
                        <h4>Paramédico</h4>
                        <figure>
                            <img src={Ambulance} alt=""></img>
                        </figure>
                    </div>
                    <div className="r3Guide">
                        <h5>Guía:</h5>
                        <p>Estas misiones se activan al subirse a una ambulancia. Hay que recoger a los heridos que salen señalados en el mapa y llevarlos de vuelta al hospital.</p>
                    </div>
                    <div className="r3Reward">
                        <div className="r3RewardTitle">
                            <h4>Recompensa:</h4>
                            <p>El premio por salvar a 45 pacientes en cualquiera de las islas es un icono de vida en todos tus escondites. Si salvas a 85 el premio es una pastilla de adrenalina. Y si llegas al nivel 12 tendrás resistencia infinita, por lo que podrás correr sin cansarte.</p>
                        </div>
                        <div className="r3RewardImage">
                            <img src={ambulanceReward} alt=""></img>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="r3Title">
                        <h4>Vigilante</h4>
                        <figure>
                            <img src={Police} alt=""></img>
                        </figure>
                    </div>
                    <div className="r3Guide">
                        <h5>Guía:</h5>
                        <p>Para activar las misiones de vigilante tienes que subirte a cualquiera de estos vehículos: coche de policía, enforcer, coche del FBI y rhino (el tanque). El objetivo es matar a los criminales que salen señalados en el radar.</p>
                    </div>
                    <div className="r3Reward">
                        <div className="r3RewardTitle">
                            <h4>Recompensa:</h4>
                            <p>El premio por matar a 10 criminales en cada isla es una estrella de soborno extra en las 3 guaridas. Si matas a 20 criminales el premio serán 2 estrellas. Por tanto, si matas a 20 criminales en cada una de las 3 islas tendrás 6 estrellas de soborno.</p>
                        </div>
                        <div className="r3RewardImage">
                            <img src={policeReward} alt=""></img>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="r3Title">
                        <h4>Bombero</h4>
                        <figure>
                            <img src={Firetruck} alt=""></img>
                        </figure>
                    </div>
                    <div className="r3Guide">
                        <h5>Guía:</h5>
                        <p>Las misiones de bombero se activan al subirse a un camión de bomberos. El objetivo es apagar los fuegos que salen señalados en el radar.</p>
                    </div>
                    <div className="r3Reward">
                        <div className="r3RewardTitle">
                            <h4>Recompensa:</h4>
                            <p>El premio por apagar 60 fuegos (20 en cada isla) es el lanzallamas, que encontrarás en cualquiera de los 3 escondites.</p>
                        </div>
                        <div className="r3RewardImage">
                            <img src={firetruckReward} alt=""></img>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default R3;