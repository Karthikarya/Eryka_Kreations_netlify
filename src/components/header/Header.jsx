import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/kreations.png";
import Socialicons from "../social/Social";
import MobileNav from "../mobilemenu/MobileNav";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header_content">
        <div className="header_container">
          {/* Logo */}
          <Link to={"/portfolio"}>
            <img className="header_logo" src={logo} alt="Eryka Kreations" />
          </Link>
          {/* navigation */}
          <nav className="header_navigation">
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
        </div>
        {/* Social Icons */}
        <Socialicons />
      </div>

      {/* Mobile Menu */}
      <MobileNav />
    </header>
  );
}

export default Header;
