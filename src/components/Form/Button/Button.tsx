import React from 'react';
import { ButtonProps } from './Button.model';
import { ButtonStyled } from './Button.styled';

const Button = ({
  children,
  bgColor = '#34495e',
  color = '#ffffff',
}: ButtonProps) => {
  return (
    <ButtonStyled
      data-testid="button"
      style={{
        backgroundColor: bgColor,
        color,
      }}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
