import React, {useState, useEffect} from 'react';
import "./Bands.css";

import sun from "../../assets/sun.png";
import Loading from "../Loading/Loading";

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
        <section className="bandsContainer">
            <section className="bandsTitle">
                <h1>Bandas</h1>
            </section>
            <section className="cardsContainer">
                {stateBands &&
                    stateBands.map((band) =>
                        <article key={band.id}>
                            <h4>{band.name}</h4>
                            <figure onClick={() => setModal(band.id)} className="logoContainer">
                                <img src={band.logo} alt="logo"></img>
                            </figure>
                            <div className={stateModal === band.id ? "modal" : "modalNone"}>
                                <div className="modalCard">
                                    <section className="modalHeader">
                                        <div className="modalTitle">
                                            <h1>{band.name}</h1>
                                        </div>
                                        <div className="close">
                                            <i onClick={() => setModal("modalNone")} className="fas fa-times"></i>
                                        </div>
                                    </section>
                                    <section className="modalInfo">
                                        <article className="bandlogo">
                                            <div className="info">
                                                <p>Jefe: {band.boss}</p>
                                                <p>Localización: {band.location}</p>
                                                <p>Nacionalidad: {band.nationality}</p>
                                                <p>Vehiculo: {band.vehicle}</p>
                                            </div>
                                            <figure className="logoImage">
                                                <img src={band.logo} alt="logo"></img>
                                            </figure>
                                        </article>
                                        <figure className="member">
                                            <img src={band.member} alt="member"></img>
                                        </figure>
                                        <figure className="car">
                                            <img className="sunImage" src={sun} alt="sun"></img>
                                            <img className="carImage" src={band.car} alt="car"></img>
                                        </figure>
                                    </section>
                                </div>
                            </div>
                        </article>
                    ) 
                } 
            </section>
            {!stateBands &&
                    <Loading/>
                }
        </section>
    )
}

export default Bands;
