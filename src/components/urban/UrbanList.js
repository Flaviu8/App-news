import {
  Urban,
  UrbanDescr,
  UrbanImg,
  UrbanTitle,
  UrbanTitleEl
} from "./Urban.style";

const UrbanList = ({ url, title, img, descr }) => {
  return (
    <Urban>
      <a href={url}>
        <UrbanImg src={img} alt={title} />
      </a>
      <div>
        <p>3 days ago &#8226; 1 min</p>
      </div>

      <UrbanTitle href={url}>
        <UrbanTitleEl>{title}</UrbanTitleEl>
        <UrbanDescr>{descr}</UrbanDescr>
      </UrbanTitle>
    </Urban>
  );
};

export default UrbanList;