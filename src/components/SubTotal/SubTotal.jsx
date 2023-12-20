import { useGlobalContext } from "../Context/Context";
import { Container, Summary, Total, Price, Checkout } from "./SubTotalStyles";
import { PrimaryButton } from "../index";

const SubTotal = () => {
  const { cartSubtotal } = useGlobalContext();
  const subTotal = cartSubtotal();

  return (
    <section>
      <Container>
        <h3>order summary</h3>
        <Summary>
          <Total>
            <h4> Total:</h4>
            <Price>
              <h4>£{subTotal}</h4>
            </Price>
          </Total>
          <Total>
            <h4>Shipping:</h4>
            <Price>
              <h4>Free</h4>
            </Price>
          </Total>
          <Total>
            <h4> Subtotal:</h4>
            <Price>
              <h4>£{subTotal}</h4>
            </Price>
          </Total>
        </Summary>
        <Checkout>
          <PrimaryButton>Check Out</PrimaryButton>
        </Checkout>
      </Container>
    </section>
  );
};

export default SubTotal;
