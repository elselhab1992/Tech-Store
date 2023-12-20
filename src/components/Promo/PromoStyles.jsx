import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Heading = styled.h4`
  color: ${(props) => props.theme.colors.primary};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  width: 400px;
  padding: 5px 8px;

  @media (min-width: 300px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Input = styled.input`
  border: 0;
  outline: 0;
`;

export { Container, Input, Content, Heading };
