import styled from "styled-components";
import { Link } from "react-router-dom";
import { Count } from "../Navbar/NavbarStyles";

const SideBar = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 80px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding-top: 5rem;
  left: ${(props) => (props.menu ? "0" : "-100%")};
  transition: 700ms;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.SemiBold};
`;

const CartCount = styled(Count)`
  margin-top: -110px;
  margin-left: 40px;
  width: 25px;
  height: 25px;
  border-radius: 12px;
`;

export { SideBar, MobileLink, CartCount };
