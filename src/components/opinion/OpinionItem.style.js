import styled from "@emotion/styled";

export const OpinionContainer = styled.div`
  width: 15%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const OpinionEl = styled.a`
  display: block;
  width: 100%;
  margin-top: 2em;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #fbb67c;
    transition: 0.5s;
  }
`;

export const OpinionElTitle = styled.h5`
  margin-bottom: 0.6em;
  font-size: 1.5em;
  font-weight: normal;
`;

export const OpinionElDescr = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
`;

export const OpinionElUser = styled.img`
  width: 30px;
`;

export const OpinionElUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3em;
  p {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    font-size: 0.8em;
    span {
      display: block;
      font-size: 0.8em;
    }
  }
`;
