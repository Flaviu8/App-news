import {
  Climate,
  ClimateDescr,
  ClimateImg,
  ClimateTitle,
  ClimateTitleEl
} from "./Climate.style";

const ClimateList = ({ url, title, img, descr }) => {
  return (
    <Climate>
      <a href={url}>
        <ClimateImg src={img} alt={title} />
      </a>
      <div>
        <p>3 days ago &#8226; 1 min</p>
      </div>

      <ClimateTitle href={url}>
        <ClimateTitleEl>{title}</ClimateTitleEl>
        <ClimateDescr>{descr}</ClimateDescr>
      </ClimateTitle>
    </Climate>
  );
};

export default ClimateList;
