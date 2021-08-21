import React from 'react';
import "../styles/Home.css";

import cover from "../assets/cover.jpg";
import claude from "../assets/claude_speed.png";

function Home() {
    return (
        <section className="home">
            <article className="cover">
                <img src={cover} alt="cover"></img>
            </article>
            <article className="introduction">
                <h1>Bienvenido a Liberty City.</h1>
                <p>Acabas de llegar a una ciudad en donde la delincuenia está a la orden del día. Acabas de ser traicionado por tu novia en el atraco a un banco. Por suerte, gracias a 8-Ball consigues huir del furgón policial en donde eras trasladado. Ahora eres libre, y deberás escalar posiciones dentro de las diferentes bandas y mafias de la ciudad para poder cumplir tu objetivo: LA VENGANZA.</p>
                <br></br>
                <p>En esta guía te explicamos paso a paso cómo completar cada una de las misiones del juego, tanto las principales como las secundarias. Aunque a la hora de la verdad será tu habilidad con el mando la que determinará si eres capaz de completar con éxito el juego. También podrás encontrar una guía detallada para conseguir los 100 paquetes ocultos, así como para completar las 20 masacres, reunir los vehículos de los garajes de importación/exportación, y encontrar la localización de los 20 saltos únicos que hay repartidos por toda Liberty City.</p>
                <h2>Antes de pasar de página recuerda: en Liberty City primero se dispara, y luego se pregunta.</h2>
            </article>
            <article className="claude">
                <img src={claude} alt="claude"></img> 
            </article>
        </section>
    )
}

export default Home;
