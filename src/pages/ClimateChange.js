import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import ClimateInner from "../components/climate_change/ClimateInner";
import ClimateChangeEl from "../components/climate_change/ClimateChangeEl";
import { ClimateChangeListMain } from "../components/climate_change/ClimateChange.style";




const ClimateChange = () => {

    return (
        <ClimateChangeListMain>
            <ClimateInner />
            <ClimateChangeEl />
        </ClimateChangeListMain>
    )

}


export default ClimateChange;