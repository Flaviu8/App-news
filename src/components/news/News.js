import {
  NewsContainer,
  NewsImage,
  Paragraph,
  Headline,
  SecParagraph
} from "./News.style";

const News = () => {
  return (
    <NewsContainer>
      <NewsImage
        src="https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"
        alt=""
      />

      <Paragraph>11 hours ago 2 min</Paragraph>
      <Headline>Coastal Cities to Be Inundated by 2050</Headline>
      <SecParagraph>
        New report highlights growing danger to countless cities and populations
      </SecParagraph>
    </NewsContainer>
  );
};

export default News;
