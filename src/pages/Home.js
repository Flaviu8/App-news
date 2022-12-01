import React from "react";
import Climate  from "../components/climate/Climate";
import Footer from "../components/footer/footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import UrbanContainer  from "../components/urban/Urban";
import Video from "../components/video/Video";



const Home = () => {

    return (
        <div>
            <Main />
            <Climate />
            <UrbanContainer />
            <Video />
        </div>
    )

}


export default Home;