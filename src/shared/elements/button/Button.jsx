import classnames from "classnames";
import React from "react";
import { styled } from "shared/theme";

export const Button = ({
  children,
  className = "",
  color = "default",
  ...restProps
}) => {
  const buttonClass = classnames("__button", className);

  return (
    <ButtonWrapper {...restProps} color={color} className={buttonClass}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: inline;

  background: ${(props) => props.theme.colors[props.color]};
  border-color: ${(props) => props.theme.colors[props.color]};
  color: #fff;

  &:hover,
  &:focus {
    color: #fff;
    background: ${(props) => props.theme.colors[props.color]};
    border-color: ${(props) => props.theme.colors[props.color]};
    filter: brightness(0.95);
  }
`;
