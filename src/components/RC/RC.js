import React, {useState, useEffect} from 'react';
import "./RC.css";

import Loading from "../Loading/Loading";

function RC() {
    const [stateRC, setRC] = useState("");
    const [state4x4, set4x4] = useState("");

    const [stateModalRC, setModalRC] = useState("");
    const [stateModal4x4, setModal4x4] = useState("");

    useEffect(() => {
        fetch("https://gtaiii.herokuapp.com/rc")
        .then(response => response.json())
        .then(data => setRC(data));

        fetch("https://gtaiii.herokuapp.com/4x4")
        .then(response => response.json())
        .then(data => set4x4(data));
    }, []);

    return (
        <div className="rc4x4">
            <section className="missionsTitle">
                <h1>Misiones RC ToyZ y 4x4</h1>
            </section>
            <section className="rc">
                <div className="rcTitle"><h1>RC ToyZ</h1></div>
                <div className="rcDescription">
                    <p>Para realizar estas misiones tienes que localizar las furgonetas azules con el nombre Toyz escrito en los laterales, y subirte a ellas. De este modo podrás manejar coches de radiocontrol, con los que deberás destruir los tipos de coches que te indiquen en 2:00 de tiempo. Por cada coche destruido recibirás 1.000$ de recompensa. La manera de destruirlos es muy fácil: el coche de radiocontrol lleva una bomba, por lo que tienes que pulsar el botón círculo cuando estés al lado de tu objetivo para hacer que explote. Pero también sirve con tocar las ruedas del coche que quieras destruir, así que ten cuidado y esquiva a los demás si no quieres perder tiempo.</p>
                </div>
                <div className="rcCards">
                    {stateRC &&
                        stateRC.map((rc) =>
                            <div className="rcCard" key={rc.id}>
                                <h4>{rc.name}</h4>
                                <figure>
                                    <img src={rc.screen} alt=""></img>
                                </figure>
                                <button onClick={() => {setModalRC(rc.id)}}>Ver ubicacón</button>
                                <div className={stateModalRC === rc.id ? "rcModalContainer" : "rcModalNone"}>
                                    <div className="close"><i onClick={() => {setModalRC("rcModalNone")}} className="fas fa-times"></i></div>
                                    <div className="modalMapRC">
                                        <img src={rc.map} alt=""></img>
                                    </div>
                                </div>
                                <h5>Guía:</h5>
                                <p>{rc.guide}</p>
                            </div>
                        )
                    }
                    {!stateRC &&
                        <div className="rcLoading">
                            <Loading />
                        </div>
                    }
                </div>
            </section>
            <section className="container4x4">
                <div className="title4x4"><h1>4x4</h1></div>
                <div className="description4x4">
                    <p>Estas misiones se activan al subirse a ciertos vehículos repartidos por Liberty City, generalmente Patriots. El objetivo es pasar por unos puntos de control en un determinado tiempo, sumándose algunos segundos por cada punto de control por el que pasemos. Son misiones muy difíciles y requieren un gran manejo del vehículo, ya que al mínimo error podremos volcar. Muy importante: no siempre aparecerán los vehículos en el lugar donde deberían estar. Si sucede esto, date una vuelta y regresa, y seguramente ya esté el vehículo aparcado en su lugar.</p>
                </div>
                <div className="cards4x4">
                    {state4x4 &&
                        state4x4.map((e) =>
                            <div className="card4x4" key={e.id}>
                                <h4>{e.name}</h4>
                                <figure>
                                    <img src={e.screen} alt=""></img>
                                </figure>
                                <button onClick={() => setModal4x4(e.id)}>Ver ubicación</button>
                                <div className={stateModal4x4 === e.id ? "ModalContainer4x4" : "ModalNone4x4"}>
                                    <div className="close"><i onClick={() => {setModal4x4("rcModalNone")}} className="fas fa-times"></i></div>
                                    <div className="modalMap4x4">
                                        <img src={e.map} alt=""></img>
                                    </div>
                                </div>
                                <h5>Guía:</h5>
                                <p>{e.guide}</p>
                            </div>
                        )
                    }
                    {!state4x4 &&
                        <div className="Loading4x4">
                            <Loading />
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default RC;
