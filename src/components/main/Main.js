import Opinion from "../opinion/Opinion";
import News from "../news/News";
import Stories from "../stories/Stories";

import { MainContainer } from "./Main.style";

const Main = () => {
  return (
    <MainContainer>
      <Stories />
      <News />
      <Opinion />
    </MainContainer>
  );
};

export default Main;
