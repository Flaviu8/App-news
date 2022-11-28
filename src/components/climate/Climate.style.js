import styled from "@emotion/styled";



export const ClimateImg = styled.img`
  margin-bottom: 3em;
  width: 100%;
  object-fit: cover;
  height: 420px;
  @media only screen and (max-width: 1024px) {
    display: block;
  } 

`;

export const ClimateMain = styled.div `
      display: flex;
      margin: auto;
      width: 90%;
      justify-content: space-between;
      
      @media only screen and (max-width: 1024px) {
      flex-direction: column;
      } 
`;

export const Climate = styled.div`
  display: block;
  margin-top: 2em;
  width: 23%;
  &:nth-child(2n) img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  @media only screen and (max-width: 1024px) {
      width: 100%
  }
`;



export const ClimateTitle = styled.a`
  margin-bottom: 0.6em;
  font-size: 1.5em;
  font-weight: normal;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #fbb67c;
    transition: 0.5s;
  }
  @media only screen and (max-width: 1024px) {
     width: 100%;
  }
`;
export const ClimateTitleEl = styled.h5`
  margin-top: 2em;
  margin-bottom: 0.6em;
  font-size: 1em;
  font-weight: normal;
`;

export const ClimateDescr = styled.a`
  font-size: 0.8em;
  line-height: 1.5;
  text-decoration: none;
  @media only screen and (max-width: 1024px) {
    /* width: 100%;/ */
  }
`;
