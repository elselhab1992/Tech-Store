/* eslint-disable react/prop-types */
import { PrimaryBtn, SecondaryBtn } from "./ButtonStyles";

const PrimaryButton = ({ children }) => {
  return <PrimaryBtn>{children}</PrimaryBtn>;
};

const SecondaryButton = ({ children }) => {
  return <SecondaryBtn>{children}</SecondaryBtn>;
};

export { PrimaryButton, SecondaryButton };
