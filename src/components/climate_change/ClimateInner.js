import React from "react";
import ClimateChangeList from "./ClimateChangeList";

const arrayItems = [{
    id: 2,
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"

}]

const ClimateInner = () => {
    return (
    <div>
        {arrayItems.map((item) => {
            return (
              <ClimateChangeList 
                img={item.img}
                title={item.title}
                descr={item.descr}
                key={item.id}
                
               />
              
         )
        })}
        
    </div>
    )
}

export default ClimateInner;