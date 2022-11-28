import {
  StoryEl,
  StoryElImg,
  StoryElTitle,
  StoryElDescr
} from "./Stories.style";

const StoryItem = ({ url, title, img, descr }) => {
  return (
    <StoryEl href={url}>
      <StoryElImg src={img} alt={title} />
      <StoryElTitle>{title}</StoryElTitle>
      <StoryElDescr>{descr}</StoryElDescr>
    </StoryEl>
  );
};

export default StoryItem;
