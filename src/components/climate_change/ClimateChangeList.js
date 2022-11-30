
import React from "react";
import { ClimateChangeListMain } from "./ClimateChange.style";




const ClimateChangeList = ({img, title, descr}) => {
    return (
    <ClimateChangeListMain>
        <div>
            <img src={img}/>
            <p>3 days ago &#8226; 1 min</p>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    </ClimateChangeListMain>
    )
}

export default ClimateChangeList;