import "../css/Serve.css"
import { useEffect, useState } from "react"
import { MainContext,useContext } from "../context/context"


function Serve(props) {
    
    const {theme,switchTheme} = useContext(MainContext)
  return (
    
    <>
    <div className="container serve_container "data-theme={theme} >
        <div className="row">
        <div className="col-sm serve_header">
            <h1>
                WE Are Ready To Serve You Differently
            </h1>
            <div className="paragraph"></div>
            <p>
            Arabia Talents brings to the table unmatched know-how in the gaming,
            esports, and entertainment industries, 
            all backed by the very best in integrated marketing services.
            </p>
        </div>

        <div className="row second_row ">
            <div className="col-sm-3">
                <div className="serve_col_talents serve_col ">
                    <h1>+150</h1>
                    <p> Talents </p>
                </div>
                <div className="serve_col_gloabal serve_col ">
                    <h1>+100M</h1>
                    <p>Global Reach</p>
                    
                </div>
            </div>
            <div className="col-sm-6">
                <div className="serve_image">
                    <div className="yellow_div">
                        <img src="/src/Images/Serve/people.png" alt="People" />
                        <div className="circle">
                            <img src="/src/Images/Serve/Send.png" alt="send.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="serve_col_services serve_col ">
                    <h1>+200</h1>
                    <p> Services offered </p>
                </div>
                <div className="serve_col_monthly serve_col ">
                    <h1>+15M</h1>
                    <p>Monthly Impr</p>
                </div>
            </div>
        </div>
        </div>
    </div>
      
    </>
  )
}
export default Serve