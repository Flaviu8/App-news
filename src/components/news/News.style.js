import styled from "@emotion/styled";

export const NewsContainer = styled.div`
  width: 100%;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const NewsImage = styled.img`
  padding-left: 240px;
`;

export const Paragraph = styled.p`
  margin: 20px 20px;
  padding-left: 220px;
`;

export const Headline = styled.h1`
  :hover {
    color: darkorange;
  }
  padding-left: 210px;
  font-size: 60px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0px 20px;
`;

export const SecParagraph = styled.p`
  :hover {
    color: darkorange;
  }
  margin-top: 20px;
  padding-left: 233px;
`;
