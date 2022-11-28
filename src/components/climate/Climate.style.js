import styled from "@emotion/styled";

export const Climate = styled.a`
  display: block;
  width: 100%;
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

export const ClimateImg = styled.img`
  margin-bottom: 2em;
  @media only screen and (max-width: 1024px) {
  }
`;

export const ClimateTitle = styled.h5`
  margin-bottom: 0.6em;
  font-size: 1.5em;
  font-weight: normal;
  @media only screen and (max-width: 1024px) {
    /* width: 100%;/ */
  }
`;

export const ClimateDescr = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
  @media only screen and (max-width: 1024px) {
    /* width: 100%;/ */
  }
`;
