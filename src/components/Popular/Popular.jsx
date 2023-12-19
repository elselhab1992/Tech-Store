/* eslint-disable no-unused-vars */
import { popular } from "../../data";
import { Card, Heading } from "../index";
import { Section, Container } from "./PopularStyles";

const Popular = () => {
  return (
    <Section>
      <Heading title="Popular Products" />
      <hr />
      <Container>
        {popular.map((item) => {
          const { id, img, title, price, category } = item;

          return <Card key={id} {...item} />;
        })}
      </Container>
    </Section>
  );
};

export default Popular;
