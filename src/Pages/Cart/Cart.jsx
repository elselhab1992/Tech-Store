/* eslint-disable no-unused-vars */
import { useGlobalContext } from "../../components/Context/Context";
import { CartItem, EmptyCart, Promo, SubTotal } from "../../components";
import { Container, Content, Heading, PromoDiv, Section } from "./CartStyles";

const Cart = () => {
  const { cartItems, products, cartSubtotal } = useGlobalContext();
  const subTotal = cartSubtotal();

  return (
    <Section>
      <Container>
        {subTotal > 0 ? (
          <>
            <Heading>Your Order</Heading>

            <div>
              <Content>
                {products.map((product) => {
                  const { id, title, price, img } = product;
                  if (cartItems[id] !== 0) {
                    return <CartItem key={id} {...product} />;
                  }
                })}
              </Content>
              <PromoDiv>
                <Promo />
                <SubTotal />
              </PromoDiv>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </Section>
  );
};

export default Cart;
