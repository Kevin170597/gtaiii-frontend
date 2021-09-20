import React, { useState, useEffect } from 'react';
import "./Phones.css";

import Loading from "../Loading/Loading";

function Phones() {
    const [statePhones, setPhones] = useState("");
    const [stateMissions, setMissions] = useState("");

    useEffect(() => {
        fetch("https://gtaiii.herokuapp.com/phones")
        .then(response => response.json())
        .then(data => setPhones(data));
    }, []);

    const getMissions = async (e) => {
        setMissions("");
        const missionsData = await fetch(`https://gtaiii.herokuapp.com/phonemissions/${e}`);
        const missions = await missionsData.json();
        setMissions(missions);
    }

    const [stateModal, setModal] = useState("");
    const [stateList, setList] = useState("");

    const [stateText, setText] = useState("");

    return (
        <div className="phones">
            <section className="missionsTitle">
                <h1>Misiones de teléfonos</h1>
            </section>
            <section className="phoneMissionsContainer">
                {statePhones &&
                    statePhones.map((phone) =>
                        <article className="phoneMissions" key={phone.id}>
                            <div className="phoneCard">
                                <div className="phoneMap">
                                    <h1>{phone.city}</h1>
                                    <img onClick={() => setModal(phone.id)} src={phone.location_map} alt="map"></img>
                                </div>
                                <figure>
                                    <img src={phone.location} alt="screenshot"></img>
                                </figure>
                                <div className="infoPhone">
                                    <h1>{phone.owner}</h1>
                                    <p>{phone.description}</p>
                                </div>
                                <div className={stateModal === phone.id ? "modalVisible" : "modalInvisible"}>
                                    <div className="modalMap">
                                        <i onClick={() => setModal("modalInvisible")} className="fas fa-times"></i>
                                        <img src={phone.location_map} alt="map"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="phoneMissionList">
                                <div className={stateList === phone.id ? "phoneList" : "phoneListNone"}>
                                    {stateMissions &&
                                        stateMissions.map((mission) =>
                                            <div className="missionPhoneCard" key={mission.id}>
                                                <h1>{mission.name}</h1>
                                                <div className="phoneInfo">
                                                    <p className="phoneObjective">Objetivo: {mission.objective}</p>
                                                    <p className="phoneReward">$ {mission.reward}</p>
                                                </div>
                                                <p className="phoneGuide">Guía: {stateText === mission.id ? mission.guide.slice(0, 1000) : mission.guide.slice(0, 160)}
                                                    <b onClick={() => setText(stateText === mission.id ? "" : mission.id)}>{stateText === mission.id ? " ...ver menos" : " ...ver más"}</b>
                                                </p>
                                            </div>
                                        ) 
                                    } {!stateMissions &&
                                        <Loading />
                                    }
                                </div>
                                <div onClick={() => getMissions(phone.owner)} className="openList">
                                    <button onClick={() => setList(stateList === phone.id ? "" : phone.id)}>
                                        <i className={stateList === phone.id ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                                    </button>
                                </div>
                            </div>
                        </article>
                    )
                }
                {!statePhones &&
                    <Loading />
                }
            </section>
        </div>
    )
}

export default Phones;
