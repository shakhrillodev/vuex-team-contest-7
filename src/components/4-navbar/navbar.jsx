import "./navbar.css";
import { Logo } from "../../assets";
import NavLinks from "./nav-links/nav-links";
import NavOptions from "./nav-options/nav-options";

const Navbar = () => {
  return (
    <div className="navbar container">
      <img src={Logo} className="logo" alt="logo" />
      <NavLinks />
      <NavOptions />
    </div>
  );
};

export default Navbar;
