import styled from "@emotion/styled";

export const NavContainer = styled.nav`
ul{
  display: flex;
justify-content: space-between;
width: 35%;
margin: auto;

  
  padding: 1em 0;
}
  @media only screen and (max-width: 600px) {
    ul {
      width: 85%;
    }
  
  } 
  background-color: orange;
  width: 100%;
}

`;
