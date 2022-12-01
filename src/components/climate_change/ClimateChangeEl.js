import React from "react"
import ClimateChangeElList from "./ClimateChangeElList"


const arrayList = [{
    id: 1,
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"

},
{
  id: 2,
  url: "#",
  title: "What is Lorem Ipsum?",
  descr:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  img:
    "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"

},
{
  id: 3,
  url: "#",
  title: "What is Lorem Ipsum?",
  descr:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  img:
    "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"

},
{
    id: 4,
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"

}]


const ClimateChangeEl = () => {
    return (
        <div style={{
            display: "flex"
        }}>
            {arrayList.map((item) => {
                return (
                    
                    <ClimateChangeElList 
                        img={item.img}
                        descr={item.descr}
                        title={item.title}
                        key={item.id}
                        />
                   
                )
            })}
        </div>
    )
}


export default ClimateChangeEl;
