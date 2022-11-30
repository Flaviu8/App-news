import UrbanList from "./UrbanList";
import Title from "../title/Title";
import data from "../../assets/arrayList";
import { UrbanMain } from "./Urban.style";

const UrbanContainer = () => {
  return (
    <div style={{
      paddingTop: "10em"
    }}>
      <Title title={"Urban"} />
      <UrbanMain>
        {data.map((item) => {
          return (
            <UrbanList
              key={item.id}
              img={item.img}
              title={item.title}
              descr={item.descr}
              url={item.url}
            />
          );
        })}
      </UrbanMain>
    </div>
  );
};

export default UrbanContainer;
