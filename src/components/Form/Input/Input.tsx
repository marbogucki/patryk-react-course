import React from 'react';
import { InputProps } from './Input.model';
import { InputStyled } from './Input.styled';

const Input = ({ bgColor = '#fff', color = '#000' }: InputProps) => {
  return (
    <InputStyled
      style={{
        backgroundColor: bgColor,
        color,
      }}
      value="test"
    />
  );
};

export default Input;
