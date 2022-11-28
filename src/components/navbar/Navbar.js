import { Link } from "@mui/material";
import { NavContainer } from "./Navbar.style";

const Navbar = () => {
  return (

    <NavContainer>
    <ul>
      <Link href="#" underline="none">
        {"Urban"}
      </Link>
      <Link href="#" underline="none">
        {"Climate Change"}
      </Link>
      <Link href="#" underline="none">
        {"Opinion"}
      </Link>
      <Link href="#" underline="none">
        {"Our Vision"}
      </Link>
      <Link href="#" underline="none">
        {"All articles"}
      </Link>

    </ul>
      
    </NavContainer>
  );
};

export default Navbar;
