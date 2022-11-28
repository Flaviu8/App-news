import { Link } from "@mui/material";
import { NavContainer } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <Link href="#" underline="none">
        {"Link 1"}
      </Link>
      <Link href="#" underline="none">
        {"Link 2"}
      </Link>
      <Link href="#" underline="none">
        {"Link 3"}
      </Link>
      <Link href="#" underline="none">
        {"Link 4"}
      </Link>
      <Link href="#" underline="none">
        {"Link 5"}
      </Link>
    </NavContainer>
  );
};

export default Navbar;
