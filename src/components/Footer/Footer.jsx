import { Heading } from "../index";
import payments from "../../assets/payments.png";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterBottom,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <li>
            <Heading title="About" />
          </li>
          <li>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto iusto accusantium exercitationem voluptates quis
              molestiae ipsa? Molestiae ipsa placeat labore!
            </p>
          </li>
        </FooterContent>
        <FooterContent>
          <li>
            <Heading title="contact" />
          </li>
          <li>
            <p>
              <span style={{ marginRight: 10 }}>
                <FaLocationArrow />
              </span>
              Ardwick, Manchester, UK
            </p>
          </li>
          <li>
            <p>
              <span style={{ marginRight: 10 }}>
                <FaMobileAlt />
              </span>
              +44 123456789
            </p>
          </li>
        </FooterContent>
        <FooterContent>
          <li>
            <Heading title="categories" />
          </li>
          <li>headphones</li>
          <li>smart watches</li>
          <li>speakers</li>
          <li>earbuds</li>
          <li>projectors</li>
        </FooterContent>
        <FooterContent>
          <li>
            <Heading title="pages" />
          </li>
          <li>home</li>
          <li>about</li>
          <li>privacy policy</li>
          <li>returns</li>
          <li>terms & conditions</li>
          <li>contact us</li>
        </FooterContent>
      </FooterContainer>
      <FooterBottom>
        <p>copyrights@Tech Store 2022</p>
        <img src={payments} alt="payments" />
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
