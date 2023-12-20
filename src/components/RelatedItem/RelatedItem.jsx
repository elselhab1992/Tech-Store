/* eslint-disable no-unused-vars */
import { relatedProducts } from "../../data";
import { Card } from "../index";
import { Section, Container } from "./RelatedItemStyles";

const RelatedItem = () => {
  return (
    <Section>
      {relatedProducts.map((product) => {
        const { id, title, price, img } = product;
        return (
          <Container key={id}>
            <Card {...product} />
          </Container>
        );
      })}
    </Section>
  );
};

export default RelatedItem;
