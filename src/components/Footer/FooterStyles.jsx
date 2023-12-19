import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  @media (min-width: 300px) {
    padding: 5px;
  }

  @media (min-width: 1200px) {
    padding: 2rem;
  }
`;

const FooterContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  @media (min-width: 300px) {
    width: 100%;
    grid-template-columns: 2fr 1.5fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    width: 80%;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 5rem;
  }
`;

const FooterContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const FooterBottom = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 300px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 70%;
    gap: 0;
  }
`;

export { FooterWrapper, FooterContainer, FooterContent, FooterBottom };
