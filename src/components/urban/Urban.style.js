import styled from "@emotion/styled";



export const UrbanMain = styled.div`
      display: flex;
      justify-content: center;
      
      @media only screen and (max-width: 1024px) {
            flex-direction: column;
            margin: auto;
            padding-left: 20px;
        }

`;

export const Urban = styled.div`
  display: block;
  margin-top: 4em;
  &:nth-of-type(2n) {
    margin-left: 4em;
  }
  @media only screen and (max-width: 1024px) {
    &:nth-of-type(2n) {
      margin-left: 0;
    }
  }
`;

export const UrbanImg = styled.img`
  margin-bottom: 3em;
  width: 850px;
  object-fit: cover;
  @media only screen and (max-width: 1024px) {
    width: auto;
  } 

`;

export const UrbanTitle = styled.a`
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
    /* width: 100%;/ */
  }
`;
export const UrbanTitleEl = styled.span`
  display: block;
  margin-top: 2em;
  margin-bottom: 0.6em;
  font-size: 1em;
  font-weight: normal;
`;

export const UrbanDescr = styled.span`
  display: block;
  font-size: 0.8em;
  line-height: 1.5;
  text-decoration: none;
  @media only screen and (max-width: 1024px) {
    /* width: 100%;/ */
  }
`;


