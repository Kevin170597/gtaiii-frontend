import React, {useState, useEffect} from 'react';
import "../styles/Bands.css";

import sun from "../assets/sun.png";

function Bands() {
    const [stateBands, setBands] = useState("");
    console.log(stateBands);

    const [stateModal, setModal] = useState("");
    console.log(stateModal)

    useEffect(() => {
        fetch("https://gtaiii.herokuapp.com/bands")
        .then(response => response.json())
        .then(data => setBands(data));
    }, []);

    return (
        <div className="bandsContainer">
            <h1>Bandas</h1>
            <div className="cardsContainer">
                {stateBands &&
                    stateBands.map((band) =>
                        <div className="bandsCard" key={band.id}>
                            <h4>{band.name}</h4>
                            <div onClick={() => setModal(band.id)} className="logoContainer">
                                <img src={band.logo} alt="logo"></img>
                            </div>
                            <div className={stateModal === band.id ? "modal" : "modalNone"}>
                                <div className="modalCard">
                                    <div className="modalHeader">
                                        <div className="modalTitle">
                                            <h1>{band.name}</h1>
                                        </div>
                                        <div className="close">
                                            <i onClick={() => setModal("modalNone")} className="fas fa-times"></i>
                                        </div>
                                    </div>
                                    <div className="modalInfo">
                                        <div className="bandlogo">
                                            
                                            <div className="info">
                                                <p>Jefe: {band.boss}</p>
                                                <p>Localización: {band.location}</p>
                                                <p>Nacionalidad: {band.nationality}</p>
                                                <p>Vehiculo: {band.vehicle}</p>
                                            </div>
                                            <div className="logoImage">
                                                <img src={band.logo} alt="logo"></img>
                                            </div>
                                        </div>
                                        <div className="member">
                                            <img src={band.member} alt="member"></img>
                                        </div>
                                        <div className="car">
                                            <img className="sunImage" src={sun} alt="sun"></img>
                                            <img className="carImage" src={band.car} alt="car"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                } 
            </div>
            {!stateBands &&
                    <div className="loadingContainer">
                        <img src={"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"} alt="loading"></img>
                    </div>
                }
        </div>
    )
}

export default Bands;
