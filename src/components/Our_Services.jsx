import "../css/Our_Services.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"

function Our_services(props) {
 
  const {theme,switchTheme} = useContext(MainContext)
  return (
    <>
      <div className="container our_services_container " data-theme={theme} >
        <div className="row">
          <div className="our_services_header">
            <div className="header">
              <h1>Our Services</h1>
            </div>
            <h1>We’re Offering Diverse Influencer Servies</h1>
          </div>
          {/* Col 1 */}
          <div className="col-sm our_services_box"  >
            <div className="blue_ellips ellips ">
              <div className="our_services_rectangle our_services_rectangle ">
                <img src="" alt="" />
              </div>
            </div>
            <h1>Influencer Marketing</h1>
            <p>
              We have the right knowledge, tools, and expertise to help your
              company succeed in influencer marketing campaigns.{" "}
            </p>
            <div className="bottom">
              <div className="left_div">
                <button type="button">
                  <div id="blue_box"></div>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M6.5 12.5H17.5M17.5 12.5L12.9118 8.5M17.5 12.5L12.9118 16.5" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="right_div">
                <h1>01</h1>
              </div>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-sm our_services_box ">
            <div className="yellow_ellipse ellips">
              <div className="our_services_rectangle our_services_rectangle_2"></div>
            </div>
            <h1>Talent Management</h1>
            <p>
              We have the right knowledge, tools, and expertise to help your
              company succeed in influencer marketing campaigns.
            </p>
            <div className="bottom">
              <div className="left_div">
                <button type="button">
                  <div id="blue_box"></div>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M6.5 12.5H17.5M17.5 12.5L12.9118 8.5M17.5 12.5L12.9118 16.5" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="right_div">
                <h1 className="bottom_right_side_h1">02</h1>
              </div>
            </div>
          </div>
          {/* Col 3 */}
          <div className="col-sm our_services_box ">
            <div className="green_ellipse ellips ">
              <div className="our_services_rectangle our_services_rectangle_3 "></div>
            </div>
            <h1>Celebrity Collaboration</h1>
            <p>
              We have the right knowledge, tools, and expertise to help your
              company succeed in influencer marketing campaigns.
            </p>
            <div className="bottom">
              <div className="left_div">
                <button type="button">
                  <div id="blue_box"></div>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M6.5 12.5H17.5M17.5 12.5L12.9118 8.5M17.5 12.5L12.9118 16.5" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  
                </button>
              </div>

              <div className="right_div">
                <h1 className="bottom_right_side_h1">03</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Our_services;
