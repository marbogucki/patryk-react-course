import React from 'react';
import { TextareaProps } from './Textarea.model';
import { TextareaStyled } from './Textarea.styled';

const Textarea = ({ bgColor = '#fff', color = ' #fff' }: TextareaProps) => {
  return <TextareaStyled style={{ backgroundColor: bgColor, color }} />;
};

export default Textarea;
