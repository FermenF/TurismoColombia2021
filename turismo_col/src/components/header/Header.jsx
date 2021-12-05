import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkedAlt, faTh, faSearch} from "@fortawesome/free-solid-svg-icons"

//ESTILOS
import "./Header.css";

export default function Header(){
    return(
        <header>
            
          <nav>
              <div className="location">
              <FontAwesomeIcon className="iconLocation" icon={faMapMarkedAlt}/>
              </div>
              <div className="navigation">
                  <div className="nav-page"><a href="">TextHeader</a></div>
                  <div className="nav-page"><a href="">TextHeader</a></div>
                  <div className="nav-page"><a href="">TextHeader</a></div>
              </div>
              <div className="search">
                  <div className="container__search">
                      <input className="search__input" type="text" />
                      <div className="iconSearch"><FontAwesomeIcon icon={faSearch} /></div>
                      <div className="iconSearch"><FontAwesomeIcon icon={faTh} /></div>
                  </div>
              </div>
          </nav>
        </header>
    );
}