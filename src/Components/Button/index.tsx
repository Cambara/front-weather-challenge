import React from "react";
import { ButtonContent, ButtonWrapper } from "./style";

interface IProps {
  handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void
}

const Button: React.FC<IProps> = ({ handleClick, children }) => {
  return (
    <ButtonWrapper>
      <ButtonContent onClick={handleClick}>{children}</ButtonContent>
    </ButtonWrapper>
  );
};

export default Button;
