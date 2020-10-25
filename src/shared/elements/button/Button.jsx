import classnames from "classnames";
import React from "react";
import { styled } from "shared/theme";

export const Button = ({ children, className = "", ...restProps }) => {
  const buttonClass = classnames("__button", className);

  return (
    <ButtonWrapper className={buttonClass} {...restProps}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button``;
