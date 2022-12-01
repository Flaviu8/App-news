import React from "react";
import { ClimateChangeListMain } from "./ClimateChange.style";





const ClimateChangeElList = ({img, title, descr}) => {
    return (
   
        <div>
            <img src={img}/>
            <p>3 days ago &#8226; 1 min</p>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
        
  
    )
}

export default ClimateChangeElList;