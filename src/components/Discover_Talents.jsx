import "../components/css/Discover_Talents.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "./context/context"

function Discover_Talents(props) {
    
    const {theme,switchTheme} = useContext(MainContext)

  return (
    <>
      <div className="container discover_talents_container " data-theme={theme}>
        <div className="row">
            <div className=" col-sm discover_talents_header">
                <h1>
                    Discover Our Talents
                </h1>
                <div className="paragraph"></div>
                <p>
                We do manage an exclusive roster of talent,
                from content creadtors and social media influencers to Esports commentators and even hosts.  
                We work with a plethora of great talents.
                </p>
            </div>
            <div className="row">
            <div className="col-sm talents_left_column talents_column">
                <div className="container">
                    <div className="row">
                        <div className="image col-sm">
                            <img src="Images\Discover_Talents\Left_col-image.png" alt="Caster_image" />
                        </div>
                        <div className="col-sm text">
                            <h1>
                            Arab Esports Brroad-casters
                            </h1>
                            <p>
                            Experienced play-by-play casters of Arabia Talents will level up your sports events.
                            </p>
                            <button type="button">
                                <div className="blue_box"></div>
                                Meet The Faces
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M6.5 12.5H17.5M17.5 12.5L12.9118 8.5M17.5 12.5L12.9118 16.5" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-sm talents_right_column talents_column ">
                <div className="container ">
                    <div className="row">
                        <div className="image col-sm">
                            <img src="/Images/Discover_Talents/Right_col_image .png" alt="Caster_image" />
                        </div>
                        <div className="col-sm text">
                            <h1>
                            Middle Easter Influencers
                            </h1>
                            <p>
                            Arabia Talents connects brands to top influencers, 
                            and content creators in the Middle East region.
                            </p>
                            <button type="button">
                                <div className="blue_box"></div>
                                Discover The List
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M6.5 12.5H17.5M17.5 12.5L12.9118 8.5M17.5 12.5L12.9118 16.5" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
      </div>
    </>
  )
}
export default Discover_Talents