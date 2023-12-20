import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Container } from "./SocialIconStyles";

const SocialIcon = () => {
  return (
    <Container>
      <FaFacebook size={25} />
      <FaTwitter size={25} />
      <FaInstagramSquare size={25} />
      <FaLinkedin size={25} />
    </Container>
  );
};

export default SocialIcon;
