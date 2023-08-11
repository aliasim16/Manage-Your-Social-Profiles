import React from "react";
import "../components/css/Navbar.css";
import { useEffect, useState } from "react"

function Navbar(props) {

  return (
    <>
      <nav>
        <div className="container navbar_container " data-theme={props.theme}>
          <div className="row navbar_row ">
          <div className="col-sm-1 logo">
            <img src="Images\Home_images\a2f7081c7320309befdbd8aec1409786.png" alt="" />
          </div>
          <div className="col-sm-9 middle_section">
              <nav>
                <ul>
                  <li> <a id="home"  href="#">Home</a> </li>
                  <li> <a id="services" href="#">Services</a> </li>
                  <li> <a id="case-studies" href="#">Case Studies</a> </li>
                  <li> <a id="about-us" href="#">About Us</a> </li>
                </ul>
              </nav>
          </div>
          <div className=" col-sm-2 buttons-section">
            <div className="language">
              <div className="icon">
                <img src="Images\Home_images\languages 1.png" />
              </div>
              
            </div>
            <div className="lets-talk">
              <button id="lets-talk" >
                Let's Talk 
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 12H18M18 12L13.4118 8M18 12L13.4118 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>
            </div>
          </div>

          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
