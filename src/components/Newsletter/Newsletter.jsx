import { PrimaryButton } from "../index";
import {
  Section,
  NewsletterText,
  Heading,
  InputContainer,
  Input,
  Policy,
} from "./NewsletterStyles";

const Newsletter = () => {
  return (
    <Section>
      <NewsletterText>Newsletter</NewsletterText>
      <Heading>
        subscribe to our newsletter and receive the latest offers
      </Heading>
      <InputContainer>
        <Input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <PrimaryButton>Subscribe</PrimaryButton>
      </InputContainer>
      <Policy>will be used in accordance with our privacy policy</Policy>
    </Section>
  );
};

export default Newsletter;
