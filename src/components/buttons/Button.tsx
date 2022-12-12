import React from "react";
import { ButtonProps } from "../../services/types";
import { ButtonWrapper } from "./style";

const Button: React.FC<ButtonProps> = ({ onClick, color, label }) => {
  return (
    <ButtonWrapper onClick={onClick} color={color}>
      {label}
    </ButtonWrapper>
  );
};

export default Button;
