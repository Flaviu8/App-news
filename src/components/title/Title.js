import { TitleContainer, Link, ClimateParagraph } from "./Title.style.js";

const Title = ({ title, url }) => {
  return (
    <TitleContainer>
      <ClimateParagraph>{title}</ClimateParagraph>
      <Link href={url}>Read more</Link>
    </TitleContainer>
  );
};

export default Title;
