import styled from "@emotion/styled";


export const FooterComponent = styled.footer`
    background-color: #FFB67C;
    display: flex;
    padding-left: 10%;
    align-items: center;
    @media only screen and (max-width: 1024px) {
            flex-direction: column;
            padding-left: 0px;
    }
    
`;

export const FooterTitle = styled.h2`
    font-size: 3em;
    font-weight: normal;
  

`;


export const FooterEl = styled.div`
   width: 50%;
  
  
   @media only screen and (max-width: 1024px) {
  padding-top: 4em;
  width: 90%;
}

`;

export const FootercomponentEl = styled.div`
   width: 50%;
   padding-left: 20%;
   margin-top: 10em;

   @media only screen and (max-width: 1024px) {
    padding-left: 5em;
    width: 100%;
  }

`;

export const FooterInputEl = styled.div`
    display: flex;
    margin-top 7em;
`;



export const FooterInput = styled.input`
  width: 250px;
  height: 4em;
  border:none;
  border-bottom: 1px solid black;
  background-color: transparent;
  &::focus {
    border: none
  }

`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
  padding-top: 5em;
  margin: auto;
  padding-bottom: 6em

`;

export const FooterLink = styled.a`
    display: flex;
    border: 1px solid black;
    width: 13em;
    color: #000;
    margin-left: 1em;
    height: 3.5em;
    align-items: center;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
        transition: 0.4s;
    }

`;

export const FooterCopyright = styled.p`
    padding-bottom: 5em
`;

