import SubTitle from "../sub_title/SubTitle";
import { StoriesContainer } from "./Stories.style";
import StoryItem from "./Storyitem";

const arrList = [
  {
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
  },
  {
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
  }
];

const Stories = () => {
  return (
    <StoriesContainer>
      <SubTitle title={"Top Stories"} />
      {arrList.map((item) => {
        return (
          <StoryItem
            url={item.url}
            title={item.title}
            img={item.img}
            descr={item.descr}
          />
        );
      })}
    </StoriesContainer>
  );
};

export default Stories;
