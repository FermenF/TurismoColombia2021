import React, {useState} from "react";
import MapCol from "../components/map/mapCol"
import Video from "../components/video/Video";
import { Button } from "antd";

import './Home.css';

export default function Home(){
    
 const [isModalVisible, setIsModalVisible] = useState(false);

 const showModal = () => {
   setIsModalVisible(true);
 };

 const handleOk = () => {
   setIsModalVisible(false);
 };

 const handleCancel = () => {
   setIsModalVisible(false);
 };
    

    return (
        <section>
            <section className="Home">
         <div className="container__Home">
            <div className="container__date">
                <div className="bar">
                    <div className="barLine"></div>
                    <div className="barLine2"></div>
                    <div className="bar__day">01</div>
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
                        EXPLORE <br />
                        COLOMBIA
                    </div>
                    <div className="text_button">
                        <button>Start traveling</button>
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
                <MapCol />
            </section>
            <div>
            <Button type="primary" onClick={showModal}>
            Open Modal
            </Button>
            </div>
            
            
           
        </section>
    )
}



