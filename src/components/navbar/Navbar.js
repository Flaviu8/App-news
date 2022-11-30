// import { Link } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { NavContainer } from "./Navbar.style";

const Navbar = () => {
  return (

    <NavContainer>
    <ul>
      <NavLink to= "/"  >
        {"Urban"}
      </NavLink>
      <NavLink to="/climate-change" >
        {"Climate Change"}
      </NavLink>
      <NavLink to="opinion" >
        {"Opinion"}
      </NavLink>
      <NavLink to="our-vision" >
        {"Our Vision"}
        </NavLink>
      <NavLink to="all-articles">
        {"All articles"}
        </NavLink>
    </ul>
      
    </NavContainer>
  );
};

export default Navbar;
