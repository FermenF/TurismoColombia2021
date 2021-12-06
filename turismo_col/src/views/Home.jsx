import React, {useState} from "react";
import MapCol from "../components/map/mapCol"
import Video from "../components/video/Video";

import './Home.css';

export default function Home(){

    return (
        <section>
            <section className="Home">
         <div className="container__Home">
            <div className="container__date">
                <div className="bar">
                    <div className="barLine"></div>
                    <div className="barLine2"></div>
                    <div className="bar__day">20 Julio</div>
                </div>
                <div className="country">
                    <h1>
                      <span className="color__ylw">COLO</span>
                      <span className="color__blu">MB</span>
                      <span className="color__red">IA</span>
                    </h1>
                </div>
            </div>
            <div className="container__content">
                <div className="content_text">
                    <div className="text_title">
                        ITALO <br /> TRAVEL
                    </div>
                    <div className="text_button">
                        <a href="#mapa_interactivo" style={{textDecoration:"none", color:"#000", }}><button>Comianza a viajar!!</button></a>
                    </div>
                </div>
                <div className="content_info">
                    <div className="info">
                        <div className="numberContent">01</div>
                        <div className="titleContent">Title Here</div>
                        <div className="descripcionContent">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    </div>
                    <div className="info">
                        <div className="numberContent">02</div>
                        <div className="titleContent">Title Here</div>
                        <div className="descripcionContent">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    </div>
                    <div className="info">
                        <div className="numberContent">03</div>
                        <div className="titleContent">Title Here</div>
                        <div className="descripcionContent">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                    </div>
                    <div className="infoVideo">
                        <Video />
                    </div>
                </div>
            </div>
         </div>
            </section>
            <section className="contentMap">
            <a id="mapa_interactivo"></a>
                <MapCol />
                <div className="contentMap__text">
                    <div className="MAP__TITLE">
                        EXPLORA Y DISFRUTA DE NUESTRO GRAN PAIS, <span style={{color:"yellow"}}>COLO</span><span style={{color:"blue"}}>MB</span><span style={{color:"red"}}>IA.</span>
                    </div>
                    <div className="MAP_INFO">
                       Selecciona un sitio disponible en el mapa, escoge el que más te gusta y viaja.
                    </div>
                </div>
            </section>
            <div>
            
        </div>
        </section>
    )
}



