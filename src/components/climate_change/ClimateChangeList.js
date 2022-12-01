
import React from "react";






const ClimateChangeList = ({img, title, descr}) => {
    return (
        <div>
            <img src={img}/>
            <p>3 days ago &#8226; 1 min</p>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    )
}

export default ClimateChangeList;