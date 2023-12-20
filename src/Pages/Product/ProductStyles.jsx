import styled from "styled-components";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { PrimaryBtn } from "../../components/Button/ButtonStyles";

const Section = styled.section`
  padding: 3rem 18rem;

  @media (min-width: 300px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 3rem 18rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 300px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-bottom: 3rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    margin: auto;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
`;

const Input = styled.input`
  width: 50px;
  padding: 5px;
  height: 40px;
  border: 1px solid #ccc;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.bolder};
`;

const Minus = styled(FiMinusSquare)`
  font-size: 40px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Add = styled(FaRegSquarePlus)`
  font-size: 40px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const Button = styled(PrimaryBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const BottomInfo = styled.div`
  margin: 1rem 0;
  line-height: 2;
`;

const MoreInfo = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const Related = styled.div`
  @media (min-width: 300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export {
  Section,
  Container,
  ImgContainer,
  OrderContainer,
  Input,
  Minus,
  Add,
  InputContainer,
  Button,
  BottomInfo,
  MoreInfo,
  Related,
};
