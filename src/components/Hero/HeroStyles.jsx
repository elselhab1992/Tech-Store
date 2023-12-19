import styled from "styled-components";
import { PrimaryBtn } from "../Button/ButtonStyles";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 19rem;
  background-image: linear-gradient(to right, #8e2de2, #4a00e0);

  @media (min-width: 300px) {
    flex-direction: column-reverse;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 1200px) {
    padding: 3rem 19rem;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 300px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.bolder};

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const Info = styled.p`
  width: 80%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  gap: 2rem;
`;

const PrimaryButtons = styled(PrimaryBtn)`
  border: 1px solid ${(props) => props.theme.colors.white};
`;

const ImgContainer = styled.div`
  width: 50%;

  @media (min-width: 300px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export {
  Section,
  HeadingContainer,
  Heading,
  Info,
  Buttons,
  PrimaryButtons,
  ImgContainer,
  Img,
};
