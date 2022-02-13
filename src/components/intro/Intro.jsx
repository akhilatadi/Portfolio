import React from "react";
import "./Intro.css";
import Me from "../../images/me.png"

function Intro() {
  return (
    <div className="intro">
      <div className="intro_left">
        <div className="intro_leftWrapper">
    
          <h1 className="intro_name">Akhila Tadi</h1>
          <div className="intro_title">
            <div className="intro_titleWrapper">
              <div className="intro_titleItem">
                  <h6>A Front-end Developer based in Montreal</h6> 
              </div>
            </div>
           
          </div>
         
        </div>

        

      </div>

      <div className="intro_right">
      <div className="intro_bg"></div>
      <img  className="intro_image" src={Me}></img>

      </div>
    </div>
  );
}

export default Intro;
