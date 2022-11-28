import styled from "@emotion/styled";

export const StoriesContainer = styled.div`
  width: 15%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StoryEl = styled.a`
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

export const StoryElImg = styled.img`
  width: 100%;
  margin-bottom: 2em;
`;

export const StoryElTitle = styled.h5`
  margin-bottom: 0.6em;
  font-size: 1.5em;
  font-weight: normal;
`;

export const StoryElDescr = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
`;
