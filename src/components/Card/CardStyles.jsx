import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #ededed;
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 1rem;
  transition: 700ms;

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }

  @media (min-width: 300px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 80%;
  margin: auto;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Img, NavLink };
