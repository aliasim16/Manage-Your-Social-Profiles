import "../components/css/Logo.css";
import { useEffect, useState } from "react"
import { MainContext,useContext } from "./context/context"

function Logo(props) {

  return (
    <>
    <div className="container container_logo ">
        <div className="row">
            <div className="col-sm " id="Electronic-Arts-Logo" ><img src="Images\Logo_images\Electronic-Arts-Logo.png" alt="Electronic-Arts-Logo" /></div>
            <div className="col-sm " id="Activision" ><img src="Images\Logo_images\Activision.png" alt="Activision.png" /></div>
            <div className="col-sm " id="epicgames" ><img src="Images\Logo_images\epicgames.png" alt="epicgames.png" /></div>
            <div className="col-sm " id="Huawei_Logo" ><img src="Images\Logo_images\Huawei-Logo.png" alt="Huawei-Logo.png" /></div>
            <div className="col-sm " id="Talabat_logo" ><img src="Images\Logo_images\Talabat_logo.png" alt="Talabat_logo.png" /></div>
            <div className="col-sm " id="pngfind" ><img src="Images\Logo_images\pngfind.png" alt="pngfind.png" /></div>
        </div>
    </div>      
    </>
  )
}
export default Logo