import styled from "@emotion/styled";

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 2em 4em;
  padding: 2em 5em;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 2em 0;
  }
`;
