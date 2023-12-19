/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Img } from "./CardStyles";

const Card = ({ id, img, title, price, category }) => {
  return (
    <Container>
      <Img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>£{price}</h4>
    </Container>
  );
};

export default Card;
