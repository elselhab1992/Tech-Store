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
import { IoMdCart } from "react-icons/io";
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
  OrderContainer,
  ImgContainer,
  Related,
} from "./ProductStyles";

const Product = () => {
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
              <Minus />
              <Input />
              <Add />
            </InputContainer>
            <Button>
              Add To Cart <IoMdCart size={20} style={{ color: "#fff" }} />
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
