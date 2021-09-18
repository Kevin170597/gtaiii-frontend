import React, { useState, useEffect } from 'react';
import "./MissionsByOwner.css";

import Context from "../../Contexts/Context";

function MissionsByOwner() {
    const [stateMission, setMission] = useState("");

    const missions = React.useContext(Context);

    useEffect(() => {
        fetch(`https://gtaiii.herokuapp.com/missions/${missions.name}`)
        .then(response => response.json())
        .then(data => setMission(data));
    }, []);

    return (
        <div className="missionsByOwner">
            <section className="missionsTitle">
                <h1>Misiones de {missions.name}</h1>
            </section>
            <section className="missionsContainer">
                <figure>
                    <img src={missions.image} alt="owner"></img>
                </figure>
                <section className="missionsList">
                    {stateMission &&
                        stateMission.map((mission) => 
                            <div className="listCards">
                                <div className="missionInfo">
                                    <h1>{mission.name}</h1>
                                    <p>{mission.city}</p>
                                    <p>Recompensa: ${mission.reward}</p>
                                    <p>Objetivo: {mission.objective}</p>
                                </div>
                                <div className="guide">
                                    <h1>Guía</h1>
                                    <p>{mission.guide}</p>
                                </div>
                            </div>
                        )
                    }   
                </section>
            </section>
        </div>
    )
}

export default MissionsByOwner;
