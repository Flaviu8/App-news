import ClimateList from "./ClimateList";
import Title from "../title/Title";
import { ClimateMain } from "./Climate.style";


const arrList = [
  {
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
  }
];

const Climate = () => {
  return (
    <div>
      <Title title={"Climate Change"} />
      <ClimateMain>
        {arrList.map((item) => {
          return (
            <ClimateList
              key={item.id}
              img={item.img}
              title={item.title}
              descr={item.descr}
              url={item.url}
            />
          );
        })}
      </ClimateMain>
    </div>
  );
};

export default Climate;


