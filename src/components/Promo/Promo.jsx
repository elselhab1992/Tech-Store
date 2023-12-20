import { Container, Input, Content, Heading } from "./PromoStyles";
import { PrimaryButton } from "../index";

const Promo = () => {
  return (
    <Container>
      <Heading>have a discount code ?</Heading>
      <Content>
        <Input
          type="text"
          placeholder="Enter code here"
          id="promo"
          name="promo"
        />
        <PrimaryButton>Apply Code</PrimaryButton>
      </Content>
    </Container>
  );
};

export default Promo;
