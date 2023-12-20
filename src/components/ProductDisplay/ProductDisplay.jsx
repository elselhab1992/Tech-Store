/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ImgContainer, Img } from "./ProductDisplayStyles";

const ProductDisplay = ({ id, img, title, price, category }) => {
  return (
    <ImgContainer>
      <Img src={img} alt={title} />
    </ImgContainer>
  );
};

export default ProductDisplay;
