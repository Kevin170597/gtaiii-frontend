import React, { useState, useEffect } from 'react';
import "./MissionsByOwner.css";

import Context from "../../Contexts/Context";

import Loading from "../Loading/Loading";

function MissionsByOwner() {
    const [stateMission, setMission] = useState("");

    const missions = React.useContext(Context);

    useEffect(() => {
        fetch(`https://gtaiii.herokuapp.com/missions/${missions.name}`)
        .then(response => response.json())
        .then(data => setMission(data));
    }, []);

    const [stateText, setText] = useState("");

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
                            <div className="listCards" key={mission.id}>
                                <div className="missionInfo">
                                    <h1>{mission.name}</h1>
                                    <p className="cityTag">{mission.city}</p>
                                    <p className="rewardTag">Recompensa: ${mission.reward}</p>
                                    <p className="objectiveTag">Objetivo: {mission.objective}</p>
                                </div>
                                <div className="guide">
                                    <h1>Guía</h1>
                                    <p>{stateText === mission.id ? mission.guide.slice(0, 1000) : mission.guide.slice(0, 160)} 
                                        <b onClick={() => setText(stateText === mission.id ? "" : mission.id)}>{stateText === mission.id ? " ...ver menos" : " ...ver más"}</b>
                                    </p>
                                </div>
                            </div>
                        )
                    } {!stateMission &&
                        <Loading />
                    }
                </section>
            </section>
        </div>
    )
}

export default MissionsByOwner;
