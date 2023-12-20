import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 55vh;
  padding-top: 50px;
`;

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSize.large};

  @media (min-width: 300px) {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;
`;

const PromoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export { Section, Container, Content, Heading, PromoDiv };
