import styled from "@emotion/styled";

export const PreviewContainer = styled.a`
  display: block;
  width: 565px;
  height: 370px;
  position: relative;
  margin-top: 2em;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #fbb67c;
    transition: 0.5s;
  }
  @media only screen and (max-width: 1024px) {
  }
`;


export const PreviewImg = styled.img`
  width: 565px;
  margin-bottom: 2em;
  position: relative;
  height: 370px;
  @media only screen and (max-width: 1024px) {
  }
`;

export const PreviewTitle = styled.p`
  margin-bottom: 0.6em;
  font-size: 1.5em;
  font-weight: normal;
  @media only screen and (max-width: 1024px) {
    /* width: 100%;/ */
  }
`;

export const PreviewDescr = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
  @media only screen and (max-width: 1024px) {
    /* width: 100%;/ */
  }
`;
