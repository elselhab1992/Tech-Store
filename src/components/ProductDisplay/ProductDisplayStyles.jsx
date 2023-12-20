import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  background-color: #ededed;
  border-radius: 10px;
  padding: 2rem;
`;

const Img = styled.img`
  width: 30rem;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 25rem;
  }

  @media (min-width: 1200px) {
    width: 30rem;
  }
`;

export { ImgContainer, Img };
