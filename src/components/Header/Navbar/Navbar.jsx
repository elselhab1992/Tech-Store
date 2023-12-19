/* eslint-disable react/prop-types */
import { FaBars, FaTimes, FaShopify } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Header, NavIcons, NavLinks, NavLink, Count } from "./NavbarStyles";
import { Link } from "react-router-dom";

function Navbar({ click, handleClick }) {
  return (
    <Header>
      <Link to="/">
        <FaShopify size={60} style={{ color: "#fff" }} />
      </Link>
      <nav>
        <NavLinks>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <BsFillCartCheckFill size={30} style={{ color: "#fff" }} />
            </NavLink>
          </li>
          <li>
            <Count>0</Count>
          </li>
        </NavLinks>
      </nav>
      <NavIcons onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#fff", cursor: "pointer" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff", cursor: "pointer" }} />
        )}
      </NavIcons>
    </Header>
  );
}

export default Navbar;
