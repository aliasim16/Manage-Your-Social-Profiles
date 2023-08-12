import "../css/Services.css";
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"

function Services(props) {
    
    const {theme} = useContext(MainContext)
  return (
    <>
        <div className="container services_container " data-theme= {theme} >
            <div className="row">
                <div className="col-sm">
                    <div className="row services_left_side">
                        <div className="col-sm orange_img ">
                            <img src="Images\Services_images\Rectangle 5533.png" alt="Orange.png" />
                        </div>
                        <div className="col-sm instagram_img ">
                            <img src="Images\Services_images\Instagram.png" alt="Instagram_logo"  />
                        </div>
                    </div>
                </div>
                <div className="col-sm services_right_side ">
                    <div className="header">
                    <h1 id="first_h1" >Connecting brands with Arabic Millennials.</h1>
                    </div>
                    <h1 >MENA's Leading ROI-focused Influencer Marketing Agency.</h1>
                    <p>
                        Our group of marketing experts will guide your company with clear direction and actionable
                        steps to achieve its goals and boost your business's growth in the region. 
                        This is made possible by identifying KPIs, goals, and other requirements that
                        might have slipped under your radar.
                    </p>
                    <p>
                        We follow by building you a custom marketing campaign meant to improve brand reputation,
                        increase brand presence and optimize brand positioning thanks to our growing network of influencers.
                    </p>
                    <p>
                    All these campaigns are tracked and reported in an honest and transparent way that answers all of your burning inquiries.

                    </p>
                    <button type="button">
                        <div className="blue_box"></div>
                        View our Services
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M6.5 12.5H17.5M17.5 12.5L12.9118 8.5M17.5 12.5L12.9118 16.5" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        
    </>
  )
}
export default Services