import "../css/Rectangle.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"

function Rectangle(props) {

    
  return (
    <>
    <div className="container rectangle_container " >
        <div className="row rectangle">
            <div className="col-sm-3">
                <div className="object_1">
                    <img src="/src/Images/Footer/blue_object.png"  />
                </div>
                <div className="object_2">
                    <img src="/src/Images/Footer/white_object.png"/>
                </div>
                <div className="object_3">
                    <img src="/src/Images/Footer/light_blue_object.png" />
                </div>
                <div className="twitter">
                    <img src="/src/Images/Footer/twitter.png" alt="Twitter.png" />
                    
                </div>

            </div>
            <div className="col-sm-6">
                <div className="rectangle_header">
                    <h1> Year of expertise at your fingertips Interested in cooperation </h1>
                </div>
                <div className="lets-talk">
                    <button id="lets-talk" >
                        Let's Talk 
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12H18M18 12L13.4118 8M18 12L13.4118 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="object_4">
                    <img src="/src/Images/Footer/light_green_object.png"/>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="object_5">
                    <img src="/src/Images/Footer/light_yellow.png" />
                </div>
                <div className="object_6">
                    <img src="/src/Images/Footer/yellow.png"  />
                </div>
                <div className="instagram">
                    <img src="/src/Images/Footer/Instagram.png" alt="Instagram.png" />
                </div>

            </div>
            
        </div>
        
    </div>
      
    </>
  )
}
export default Rectangle