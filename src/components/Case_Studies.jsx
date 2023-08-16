import "../css/Case_Studies.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"

function Case_Studies(props) {
    const {theme,switchTheme} = useContext(MainContext)

  return (
    <>
        <div className="container case_studies_contianer"  data-theme={theme}>
            <div className="row">
                <div className="row">
                    <div className="col-sm case_studies_text "  >
                        <h1>Case Studies</h1>
                        <p>Driven by our passion for the industry, and our team’s,
                        Arabia Talents have created some of the most engaging influencer campaigns in gaming,
                        sports, technology and more.
                        </p>

                    </div>
                    <div className="col-sm view_all_button ">
                    <button id="view_all" >
                        View All 
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12H18M18 12L13.4118 8M18 12L13.4118 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="row case_studies_row">
                    <div className="col-sm case_studies_col-0 case_studies_col">
                        <div className="first_box"></div>
                        <div className="white_box ">
                            <div className="items">
                                <div className="tiktok_div">
                                    <img src="src/Images/Case_Studies/First Column/Tiktok.png" alt="tiktok_png" />
                                </div>
                                <div className="twitch_div">
                                    <img src="/src/Images/Case_Studies/First Column/Twitch.png" alt="twitch_png" />
                                </div>
                                <div className="snapchat_div">
                                    <img src="/src/Images/Case_Studies/First Column/Snapchat.png" alt="twitch_png" />
                                </div>
                                <div className="plus_div">
                                    <img src="/src/Images/Case_Studies/First Column/Plus.png" alt="twitch_png" />
                                </div>
                            </div>
                        </div>
                        <div className="blue_items_box">
                            <img src="/src/Images/Case_Studies/First Column/radar.png" />
                        </div>
                    </div>
                    <div className="col-sm case_studies_col-1 case_studies_col ">
                        <div className="first_box"></div>
                        <div className="white_box">
                            <img src="/src/Images/Case_Studies/Second Column/Rectangle 5555.png" />
                        </div>
                        <div className="tic_box">
                            <div className="outside_line">
                            <svg xmlns="http://www.w3.org/2000/svg" width="93" height="94" viewBox="0 0 93 94" fill="none">
                            <circle cx="46.5" cy="47.1099" r="46" stroke="#E2F1FF"/>
                            </svg>
                                <div className="middle_line">
                                <svg xmlns="http://www.w3.org/2000/svg" width="73" height="74" viewBox="0 0 73 74" fill="none">
                                <circle cx="36.5" cy="37.1099" r="36" stroke="#E2F1FF"/>
                                </svg>
                                    <div className="tic_img">
                                        <img src="/src/Images/Case_Studies/Second Column/tic.png" alt="tic_image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blue_items_box">
                            <img src="/src/Images/Case_Studies/Second Column/security-safe.png" />
                        </div>
                    </div>
                    <div className="col-sm case_studies_col-2 case_studies_col ">
                        <div className="first_box"></div>
                        <div className="white_box white_box_2  ">
                            <div className="white_box_left">
                                <img src="/src/Images/Case_Studies/Third Column/purple rectangle.png" alt="" />
                            </div>
                            <div className="white_box_right">
                                <div className="box_1"></div>
                                <div className="box_2"></div>
                                <div className="box_3"></div>
                            </div>
                        </div>
                        <div className="blue_items_box">
                            <img src="/src/Images/Case_Studies/Third Column/favorite-chart.png"  />
                        </div>
                        <div className="star">
                            <img src="/src/Images/Case_Studies/Third Column/Star.png"  />
                        
                        </div>
                    </div>
                    <div className="col-sm case_studies_col-3 case_studies_col ">
                        <img src="Images/Case_Studies/Fourth Column/valorant .png" />
                        <p>We selected a few content creators and worked on films to promote Riot Games’ fresh new FPS title, Valorant.</p>
                        <button type="button">
                            <div className="blue_box"></div>
                            More Info
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M6.5 12.1099H17.5M17.5 12.1099L12.9118 8.10986M17.5 12.1099L12.9118 16.1099" stroke="#2A3126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>      
    </>
  )
}
export default Case_Studies