import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const Img = styled.img`
  width: 100%;
  background-color: #ededed;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export { Section, Container, Img };
