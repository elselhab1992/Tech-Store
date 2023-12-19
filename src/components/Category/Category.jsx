import { categories } from "../../data";
import { Section, ImgContainer, Img } from "./CategoryStyles";

const Category = () => {
  return (
    <Section>
      {categories.map((item) => {
        const { id, category, img } = item;

        return (
          <ImgContainer key={id}>
            <Img src={img} alt={category} />
          </ImgContainer>
        );
      })}
    </Section>
  );
};

export default Category;
