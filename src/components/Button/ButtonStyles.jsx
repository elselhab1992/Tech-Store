import styled from "styled-components";

const PrimaryBtn = styled.button`
  width: 130px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border-radius: 5px;
  /* box-shadow: 0 0 0 1px ${(props) => props.theme.colors.white}; */
  border: 1px solid ${(props) => props.theme.colors.secondary};
  transition: 700ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

const SecondaryBtn = styled(PrimaryBtn)`
  width: 130px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export { PrimaryBtn, SecondaryBtn };
