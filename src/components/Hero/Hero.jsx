import { SecondaryButton } from "../Button/Button";
import heroImg from "../../assets/banner-img.png";
import {
  Section,
  HeadingContainer,
  Heading,
  Info,
  Buttons,
  PrimaryButtons,
  ImgContainer,
  Img,
} from "./HeroStyles";

const Hero = () => {
  return (
    <Section>
      {/* left */}
      <HeadingContainer>
        <Heading>Trending Tech</Heading>
        <Info>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          iusto accusantium exercitationem voluptates quis molestiae ipsa?
          Molestiae ipsa placeat labore!
        </Info>
        <Buttons>
          <PrimaryButtons>Read More</PrimaryButtons>
          <SecondaryButton>Shop Now</SecondaryButton>
        </Buttons>
      </HeadingContainer>
      {/* right */}
      <ImgContainer>
        <Img src={heroImg} alt="headphone" />
      </ImgContainer>
    </Section>
  );
};

export default Hero;
