import { popular } from "../../data";
import { useParams } from "react-router-dom";
import {
  ProductDisplay,
  ProductInfo,
  ProductDescription,
  SocialIcon,
  Heading,
  RelatedItem,
} from "../../components";
import {
  Section,
  Add,
  Button,
  Container,
  Input,
  InputContainer,
  Minus,
  BottomInfo,
  MoreInfo,
  CartIcon,
  OrderContainer,
  ImgContainer,
  Related,
} from "./ProductStyles";
import { useGlobalContext } from "../../components/Context/Context";

const Product = () => {
  const { addToCart, removeFromCart, cartItems, updateCartAmount } =
    useGlobalContext();

  const { productId } = useParams();
  const product = popular.find((item) => item.id === Number(productId));

  return (
    <Section>
      <Container>
        {/* left */}
        <ImgContainer>
          <ProductDisplay {...product} />
        </ImgContainer>
        {/* right */}
        <div>
          <ProductInfo {...product} />
          <ProductDescription />
          <OrderContainer>
            <InputContainer>
              <Minus onClick={() => removeFromCart(product.id)} />
              <Input
                id="amount"
                name="amount"
                value={cartItems[product.id]}
                onChange={(e) => updateCartAmount(e.target.value, product.id)}
              />
              <Add onClick={() => addToCart(product.id)} />
            </InputContainer>
            <Button onClick={() => addToCart(product.id)}>
              Add To Cart <CartIcon />
            </Button>
          </OrderContainer>
          <BottomInfo>
            <MoreInfo>
              Category:
              <span>{product.category}</span>
            </MoreInfo>
            <MoreInfo>
              Share:
              <span>
                <SocialIcon />
              </span>
            </MoreInfo>
          </BottomInfo>
        </div>
      </Container>
      <Related>
        <Heading title="related products" />
        <hr />
      </Related>
      <RelatedItem />
    </Section>
  );
};

export default Product;
