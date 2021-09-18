import React from 'react';
import map from "../../assets/maps/map.jpg";

import "./Maps.css";

function Maps() {
    return (
        <section className="maps">
            <section className="missionsTitle">
                <h1>Mapa de Liberty City</h1>
            </section>
            <section className="officialMap">
                <img src={map} alt="map"></img>
            </section>
        </section>
    )
}

export default Maps;
