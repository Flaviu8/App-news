import SubTitle from "../sub_title/SubTitle";
import { OpinionContainer } from "./OpinionItem.style";
import OpinionItem from "./OpinionItem";
import icon from "../../user.png";
import { Key } from "@mui/icons-material";

const arrList = [
  {
    icon: icon,
    user: "Admin",
    status: "9 hours ago",
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    icon: icon,
    user: "Admin",
    status: "9 hours ago",
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    icon: icon,
    user: "Admin",
    status: "9 hours ago",
    url: "#",
    title: "What is Lorem Ipsum?",
    descr:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
];

const Opinion = () => {
  return (
    <OpinionContainer>
      <SubTitle title={"Opinion"} />
      {arrList.map((item) => {
        return (
          <OpinionItem
            icon={item.icon}
            user={item.user}
            status={item.status}
            url={item.url}
            title={item.title}
            descr={item.descr}
          />
        );
      })}
    </OpinionContainer>
  );
};

export default Opinion;
