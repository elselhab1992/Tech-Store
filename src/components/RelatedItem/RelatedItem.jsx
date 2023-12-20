import { relatedProducts } from "../../data";
import { Link } from "react-router-dom";
import { Section, Container, Img } from "./RelatedItemStyles";

const RelatedItem = () => {
  return (
    <Section>
      {relatedProducts.map((product) => {
        return (
          <Container key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Img
                src={product.img}
                alt={product.title}
                onClick={window.scrollTo(0, 0)}
              />
            </Link>
          </Container>
        );
      })}
    </Section>
  );
};

export default RelatedItem;
