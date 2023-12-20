import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin-top: 1rem;
  padding: 10px;

  @media (min-width: 300px) {
    width: 350px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Summary = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #8f8c8c;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Checkout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Total, Summary, Price, Checkout };
