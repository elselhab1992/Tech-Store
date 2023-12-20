/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Img, NavLink } from "./CardStyles";

const Card = ({ id, img, title, price, category }) => {
  return (
    <Container>
      <NavLink to={`/product/${id}`}>
        <Img src={img} alt={title} onClick={window.scrollTo(0, 0)} />
      </NavLink>
      <h3>{title}</h3>
      <h4>£{price}</h4>
    </Container>
  );
};

export default Card;
