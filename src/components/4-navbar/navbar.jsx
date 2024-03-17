import "./navbar.css";
import { Logo } from "../../assets";
import NavLinks from "./nav-links/nav-links";
import NavOptions from "./nav-options/nav-options";

const Navbar = () => {
  return (
    <div className="parent">
      <div className="container navbar">
          <img src={Logo} className='logo' alt="logo" />
          <NavLinks />
          <NavOptions />
      </div>
    </div>
  );
};

export default Navbar;
