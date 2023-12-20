/* eslint-disable react/prop-types */
import { SideBar, MobileLink, CartCount } from "./SidebarStyles";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useGlobalContext } from "../../Context/Context";

const Sidebar = ({ click, closeMenu }) => {
  const { getTotalCartItems } = useGlobalContext();
  const totalCartItems = getTotalCartItems();

  return (
    <aside>
      <SideBar menu={+click}>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Home
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            About
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/" onClick={closeMenu}>
            Categories
          </MobileLink>
        </li>
        <li>
          <MobileLink to="/cart" onClick={closeMenu}>
            <BsFillCartCheckFill size={50} style={{ color: "#fff" }} />
          </MobileLink>
        </li>
        <li>
          <CartCount>{totalCartItems}</CartCount>
        </li>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
