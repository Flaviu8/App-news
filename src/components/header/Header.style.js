import styled from "@emotion/styled";

export const HeaderTitle = styled.div`
  margin-bottom: 0em;

`;

export const MainTitle = styled.h1`

  margin: 0.5em 0.5em;
  text-align: center;
`;

export const SubTitle = styled.p`
  margin-bottom: 0.5em;
  text-align: center; 

  @media only screen and (max-width: 600px) {
    {
    text-align: center;
    }
  
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px 0px 55px;

  @media only screen and (max-width: 600px) {
     
     display: flex;
     flex-direction: column;
     padding-top: 40px;
    
  }
  
`;

export const SocialIcons = styled.div`

display: flex; 
justify-content: space-around;
`;

