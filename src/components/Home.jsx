import "../css/Home.css";
import Navbar from './Navbar'
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"

function Home(props) {

  const {theme,switchTheme} = useContext(MainContext)


  return (
    <>
    <div className="container home_container" data-theme={theme} >
      <div className="row">
        <div className="col-sm" id='home_left_side'>
          <h1>Manage your social media Profil</h1>
          <p>Stary organized save tiime and easliy manage your social media with manitoring and team colla borth tools</p>
          <div className="form">
          <form action="">
            <input type="text" name="gmail" id="home_gmail" placeholder='Taheruiux@gmail.com' />
            <button type='submit' >Go</button>
          </form>

          </div>
        </div>
        <div className="col-sm " id='home_right_side' >
          <img src="Images/Home_images/HomePageWoman.png" alt="Woman" />
          <div className="heart_div">
            <div className="pink_circle">
              <img src="Images/Home_images/Heart.png" alt="" />
            </div>
              <h1>13.9k</h1>
            <div className="heart_row">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 17.5V6.5M12 6.5L8 11.0882M12 6.5L16 11.0882" stroke="#A0CB8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p id="green_paragraph" >25%</p>
              <p>Last 7 Days</p>
            </div>
          </div>
          {/* dark light button */}
          <div className="button">
            <input type="checkbox" name="switch" id="toggle" onClick={switchTheme}/> 
            <label htmlFor="toggle" id="toggle_label">
              <img id="sun" src="/Images/Home_images/Sun.png" alt="sun.png"/>
              <img id="moon" src="/Images/Home_images/Moon.png" alt="moon.png"/>
            </label>
          </div>
          <div className="blur">
            <div className="blur_table">
            <div className="blur_yellow_circle">
              <img src="Images/Home_images/chart.png"  />
            </div>
            </div>
            <div className="blur_text">
              <div className="top_section">
                <div className="left-section">
                  <h1>205+</h1>
                </div>
                <div className="right-section">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 17.5V6.5M12 6.5L8 11.0882M12 6.5L16 11.0882" stroke="#357EC7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                  25%
                </div>
              </div>
              <div className="bottom_section">
              Followers gaind after this post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home