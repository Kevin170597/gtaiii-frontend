import React, { useState, useEffect } from 'react';
import "../styles/Vehicles.css";

function Vehicles() {
    const [stateVehicles, setVehicles] = useState("");

    useEffect(() => {
        fetch("https://gtaiii.herokuapp.com/vehicles")
        .then(response => response.json())
        .then(data => setVehicles(data));
    }, []);

    return (
        <div className="vehiclesContainer">
            <h1>Vehiculos</h1>
            <div className="vehicles">
                {stateVehicles &&
                    stateVehicles.map((vehicle) =>
                        <div className="vehicleCard" key={vehicle.id}>
                            <div className="vehicleImage">
                                <img src={vehicle.image} alt="vehicle"></img>
                            </div>
                            <div className="vehicleInfo">
                                <h4>{vehicle.name}</h4>
                                <p>{vehicle.type}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Vehicles;
