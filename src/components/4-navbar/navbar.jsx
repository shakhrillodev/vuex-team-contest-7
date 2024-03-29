import "./navbar.scss";
import { Logo } from "../../assets";
import NavLinks from "./nav-links/nav-links";
import NavOptions from "./nav-options/nav-options";
import MenuHam from "./menu-ham/menu-ham";

const Navbar = () => {
  return (
    <div className="parent">
      <div className="container navbar">
          <img src={Logo} className='logo' alt="logo" />
          <nav>
            <NavLinks />
            <NavOptions />
          </nav>
          <MenuHam />
      </div>
    </div>
  );
};

export default Navbar;
