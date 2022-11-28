import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import SocialIcons from "../social_icons/SocialIcons";
import { Link } from "@mui/material";
import {
  HeaderTitle,
  MainTitle,
  SubTitle,
  SearchContainer
} from "./Header.style";

const Header = () => {
  return (
    <header>
      <Navbar />
      <SearchContainer>
        <Search />

        <HeaderTitle>
          <MainTitle>
            <Link href="#" underline="none">
              {"The Global Morning"}
            </Link>
          </MainTitle>
          <SubTitle>Climate News </SubTitle>
        </HeaderTitle>

        <SocialIcons />
      </SearchContainer>
    </header>
  );
};

export default Header;
