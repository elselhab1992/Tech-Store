import { FaAngleDoubleLeft } from "react-icons/fa";
import { Container, Heading, Button, Section } from "./EmptyCartStyles";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Section>
      <Container>
        <Heading> Your Cart is empty</Heading>
        <Link to="/">
          <Button>
            <FaAngleDoubleLeft
              size={20}
              style={{ color: "#fff", marginRight: 10 }}
            />
            Back To Store
          </Button>
        </Link>
      </Container>
    </Section>
  );
};

export default EmptyCart;
