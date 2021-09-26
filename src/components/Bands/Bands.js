import React, {useState, useEffect} from 'react';
import "./Bands.css";

import Loading from "../Loading/Loading";

function Bands() {
    const [stateBands, setBands] = useState("");

    const [stateModal, setModal] = useState("");

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
                        <article className="bandsCard" key={band.id}>
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
                                            <p className="boss">Jefe: {band.boss}</p>
                                            <p className="location">{band.location}</p>
                                            <p className="nationality">{band.nationality}</p>
                                            <p className="infovehicle">{band.vehicle}</p>
                                        </article>
                                        <figure className="member">
                                            <img src={band.member} alt="member"></img>
                                        </figure>
                                        <figure className="car">
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
