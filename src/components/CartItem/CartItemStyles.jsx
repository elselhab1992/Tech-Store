import styled from "styled-components";
import { FaMinusSquare } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #ccc;
  width: 600px;
  height: 170px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 300px) {
    width: 100%;
    gap: 1rem;
    padding: 0 0.5rem;
  }

  @media (min-width: 768px) {
    width: 600px;
    gap: 0;
    padding: 1rem;
  }
`;

const Img = styled.img`
  width: 150px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 30px;
  height: 25px;
  text-align: center;
  font-weight: bold;
`;

const Minus = styled(FaMinusSquare)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;

const Add = styled(FaSquarePlus)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;

export { Container, ItemInfo, Img, Count, Input, Title, Minus, Add };
