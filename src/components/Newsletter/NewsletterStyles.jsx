import styled from "styled-components";
import img from "../../assets/newsletter-bg.jpeg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 4rem;
  margin: 1rem auto;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 300px) {
    padding: 1rem 0.5rem;
    text-align: center;
  }

  @media (min-width: 1200px) {
    padding: 4rem;
  }
`;

const NewsletterText = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bolder};
  color: #656565;
`;

const Heading = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bolder};
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #6c6c6c;
`;

const Policy = styled.p`
  font-size: 14px;
  color: #656565;
`;

export { Section, NewsletterText, Heading, InputContainer, Input, Policy };
