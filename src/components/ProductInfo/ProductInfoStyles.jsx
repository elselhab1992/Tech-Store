import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Heading = styled.h3`
  font-weight: ${(props) => props.theme.fontWeight.bolder};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const Price = styled.h4`
  font-weight: ${(props) => props.theme.fontWeight.bolder};
  font-size: ${(props) => props.theme.fontSize.small};
`;

export { Container, Heading, Price };
