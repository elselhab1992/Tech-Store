import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 18rem;

  @media (min-width: 300px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 18rem;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  transition: 700ms;

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

export { Section, ImgContainer, Img };
