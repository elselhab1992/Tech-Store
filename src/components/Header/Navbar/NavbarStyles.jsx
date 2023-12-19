import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20rem;
  padding: 1rem;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: 1024px) {
    justify-content: space-between;
    gap: 0;
  }
`;

const NavIcons = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  transition: 700ms;

  &:hover {
    color: #b1b0b0;
  }
`;

const Count = styled.div`
  width: 20px;
  height: 20px;
  font-size: 14px;
  color: #fff;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
  margin-left: -40px;
`;

export { Header, NavIcons, NavLinks, NavLink, Count };
