import "../css/Footer.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"

function Footer(props) {

    const {theme,switchTheme} = useContext(MainContext)

  return (
    <>
      <div className="container footer_container " data-theme={theme}>
        <div className="row">
            <div className="col-sm-5 footer_left ">
                <div className="first_row">
                    <h1>Find Talent</h1>
                    <h1>Case Studies</h1>
                </div>
                <div className="second_row"></div>
                <div className="third_row">
                    <p>Copyright 2022 Arabia Talents, All rights reserved. </p>
                </div>
            </div>
            <div className="col-sm-2 footer_middle ">
                <img src="Images/Footer/Footer/Footer_logo.png" />
            </div>
            <div className="col-sm-5 footer_right ">
                <div className="first_row">
                    <img src="Images/Footer/Footer/Facebook.png"/>
                    <img src="Images/Footer/Footer/Twitter.png"/>
                    <img src="Images/Footer/Footer/Instagram.png"/>
                    <img src="Images/Footer/Footer/Tiktok.png"/>
                    <img src="Images/Footer/Footer/Linledin.png"/>
                    <div className="youtube_div">
                        <img src="Images/Footer/Footer/Youtube.png"/>
                    </div>
                </div>
                <div className="second_row"></div>
                <div className="third_row">
                    <h1>Terms & Conditions</h1>
                    <h1>Privacy Policy </h1>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Footer