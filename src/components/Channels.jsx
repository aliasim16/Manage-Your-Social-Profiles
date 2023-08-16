import "../css/Channels.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"
function Channels(props) {
  const {theme,switchTheme} = useContext(MainContext)

  return (
    <>
      <div className="container channels_container " data-theme={theme} >
        <div className="row">
          <div className="col-sm channels_header">
              <div className="header_h1">
              <h1 > Channels </h1>
              </div>
              <h1>WE use a multi-channel social media Approach </h1>
              <div className="paragraph"></div>
              <p>
              With a complementarity between mega and macro-influencers,
              and a strategic target on each platform to hit the right target population you wish;
              we can fulfill your social media goals and establish a community
              instead of just taking a typical UA approach.
              </p>

              <img className="container" src="/src/Images/Channels/channels_logos.png" alt="" />
              {/* <div className="svg_line">
              <svg xmlns="http://www.w3.org/2000/svg" width="1160" height="120" viewBox="0 0 1160 120" fill="none">
              <path d="M1 16.4998L197.455 107.979C197.483 107.992 197.516 107.991 197.544 107.976L378.953 10.5252C378.982 10.5093 379.018 10.5094 379.047 10.5253L579.948 118.971C579.98 118.989 580.019 118.987 580.05 118.967L760.449 0.533087C760.48 0.512606 760.52 0.511202 760.553 0.529444L971.957 118.976C971.984 118.991 972.017 118.993 972.045 118.98L1159.5 38.4998" stroke="url(#paint0_linear_1_358)" stroke-dasharray="13 13"/>
              <defs>
              <linearGradient id="paint0_linear_1_358" x1="-8.99999" y1="23.9996" x2="1186" y2="59.9997" gradientUnits="userSpaceOnUse">
                <stop stop-color="#002345"/>
                <stop offset="0.181687" stop-color="#357EC7"/>
                <stop offset="0.331631" stop-color="#FF3000"/>
                <stop offset="0.503507" stop-color="#357EC7"/>
                <stop offset="0.659344" stop-color="#FED917"/>
                <stop offset="0.822856" stop-color="#33CCFF"/>
                <stop offset="1" stop-color="#FF4BA2"/>
              </linearGradient>
              </defs>
              </svg>
              </div>
              <div className="channels_logos">
                <div className="tiktok">
                  <img src="/src/Images/Channels\tiktok.png" alt="tiktok" />
                </div>
                <img id="twitch" src="/src/Images\Channels\twitch.png" alt="" />
                <img id="youtube" src="Images\Channels\youtube.png" alt="" />
                <div className="facebook">
                  <img src="Images\Channels\facebook.png" alt="facebook" />
                </div>
                <div className="snapchat">
                  <img src="Images\Channels\Snapchat.png" alt="snapchat" />
                </div>
                <div className="twitter">
                  <img src="Images\Channels\twitter.png" alt="twitter" />
                </div>
                <img id="instagram" src="Images\Channels\instagram.png" alt="" />

              </div>
 */}
          </div>
        </div>
      </div>
    </>
  )
}
export default Channels