/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Img, NavLink } from "./CardStyles";

const Card = ({ id, img, title, price, category }) => {
  return (
    <NavLink to={`/product/${id}`}>
      <Container onClick={window.scrollTo(0, 0)}>
        <Img src={img} alt={title} />
        <h3>{title}</h3>
        <h4>£{price}</h4>
      </Container>
    </NavLink>
  );
};

export default Card;
