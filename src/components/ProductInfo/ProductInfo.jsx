/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Heading, Price } from "./ProductInfoStyles";

const ProductInfo = ({ id, title, price }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Price>£{price}</Price>
    </Container>
  );
};

export default ProductInfo;
