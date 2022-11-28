import ClimateList from "./ClimateList";
import Title from "../title/Title";
import data from "../../assets/arrayList";

const Climate = () => {
  return (
    <div>
      <Title title={"Climate Change"} />
      <div
        style={{
          display: "flex"
        }}
      >
        {data.map((item) => {
          return (
            <ClimateList
              img={item.img}
              title={item.title}
              descr={item.descr}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Climate;
