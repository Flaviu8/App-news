import {
  Climate,
  ClimateDescr,
  ClimateImg,
  ClimateTitle
} from "./Climate.style";

const StoryItem = ({ url, title, img, descr }) => {
  return (
    <Climate href={url}>
      <ClimateImg src={img} alt={title} />
      <ClimateTitle>{title}</ClimateTitle>
      <ClimateDescr>{descr}</ClimateDescr>
    </Climate>
  );
};

export default StoryItem;
