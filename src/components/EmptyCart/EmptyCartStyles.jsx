import styled from "styled-components";
import { PrimaryBtn } from "../Button/ButtonStyles";

const Section = styled.section`
  width: 100%;
  min-height: 35vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 5rem auto;

  @media (min-width: 300px) {
    margin: 2rem auto;
  }

  @media (min-width: 768px) {
    margin: 5rem auto;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.bolder};
  font-size: ${(props) => props.theme.fontSize.large};
`;

const Button = styled(PrimaryBtn)`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Section, Container, Heading, Button };
