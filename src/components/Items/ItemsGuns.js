import React, { useState, useEffect } from 'react';
import "./ItemsGuns.css";

import Loading from "../Loading/Loading";

function ItemsGuns() {
    const [stateItems, setItems] = useState("");
    console.log(stateItems)
    const [stateGuns, setGuns] = useState("");
    console.log(stateGuns)

    useEffect(() => {
        fetch("https://gtaiii.herokuapp.com/items")
        .then(response => response.json())
        .then(data => setItems(data));

        fetch("https://gtaiii.herokuapp.com/guns")
        .then(response => response.json())
        .then(data => setGuns(data));
    }, []);
    

    return (
        <div className="itemsAndGuns">
            <section className="itemsTitle">
                <h1>Items y armas</h1>
            </section>
            <div className="itemsContainer">
                <div className="items">
                    {stateItems &&
                        stateItems.map((item) => 
                            <div className="itemsCards" key={item.id}>
                                <div className="itemImage">
                                    <img src={item.image} alt="item"></img>
                                </div>
                                <div className="itemInfo">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="guns">
                    {stateGuns &&
                        stateGuns.map((gun) =>
                            <div className="gunsCards" key={gun.id}>
                                <div className="gunImage">
                                    <img src={gun.image} alt="gun"></img>
                                </div>
                                <div className="gunInfo">
                                    <h4>{gun.name}</h4>
                                    <p>$ {gun.price}</p>
                                    <p>Daño a personas: {gun.people_damage}</p>
                                    <p>Daño a vehiculos: {gun.vehicle_damage}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {!stateGuns && !stateItems &&
                <Loading />
            }
        </div>
    )
}

export default ItemsGuns
