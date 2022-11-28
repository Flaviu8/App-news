import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  display: flex;
  padding-right: 60px;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    
    
  }
`;

export const Link = styled.a`
  display: flex;
  border: 1px solid black;
  width: 10em;
  height: 3em;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.4s;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    // margin: auto;
  }
`;

export const ClimateParagraph = styled.p`
  font-size: 1.8em;
  font-weight: 200;
  padding-left: 70px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    // margin: auto;
  }
`;
