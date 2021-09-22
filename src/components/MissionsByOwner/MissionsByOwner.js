import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import "./MissionsByOwner.css";

import Context from "../../Contexts/Context";

import Loading from "../../assets/loading_card.png";

function MissionsByOwner() {
    const [state, setState] = useState({
        missions: "",
        loading: true
    })
    
    const missions = React.useContext(Context);

    useEffect(() => {
        fetch(`https://gtaiii.herokuapp.com/missions/${missions.name}`)
        .then(response => response.json())
        .then(data => setState({missions: data, loading: false}))
    }, [missions]);

    const [stateText, setText] = useState("");

    return (
        <div className="missionsByOwner">
            {!missions &&
                <Redirect to="/missions" />
            }
            <section className="missionsTitle">
                <h1>Misiones de {missions.name}</h1>
            </section>
            <section className="missionsContainer">
                <figure>
                    <img src={missions.image} alt="owner"></img>
                </figure>
                <section className="missionsList">
                    {state.missions &&
                        state.missions.map((mission) => 
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
                    } {state.loading &&
                        <div className="loadingImage">
                            <img src={Loading} alt=""></img>
                        </div>
                    }
                </section>
            </section>
        </div>
    )
}

export default MissionsByOwner;
