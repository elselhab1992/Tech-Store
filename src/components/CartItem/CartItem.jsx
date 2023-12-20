/* eslint-disable react/prop-types */
import { useGlobalContext } from "../Context/Context";
import {
  Container,
  Count,
  Input,
  Img,
  Title,
  ItemInfo,
  Minus,
  Add,
} from "./CartItemStyles";

const CartItem = ({ id, title, img, price }) => {
  const { cartItems, updateCartAmount, addToCart, removeFromCart } =
    useGlobalContext();

  return (
    <section>
      <Container>
        {/* left */}
        <div>
          <Img src={img} alt={title} />
        </div>
        {/* right */}
        <ItemInfo>
          <Title>{title}</Title>
          <h4>£{price}</h4>
          <Count>
            <span>
              <Minus onClick={() => removeFromCart(id)} />
            </span>
            <Input
              id="amount"
              name="amount"
              value={cartItems[id]}
              onChange={(e) => updateCartAmount(e.target.value, id)}
            />
            <span>
              <Add onClick={() => addToCart(id)} />
            </span>
          </Count>
        </ItemInfo>
      </Container>
    </section>
  );
};

export default CartItem;
