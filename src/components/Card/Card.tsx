import React from 'react';
import { CardProps } from './Card.model';
import { CardParagraph, CardStyled, CardTitle } from './Card.styled';

const Card = ({ title, intro }: CardProps) => {
  return (
    <CardStyled>
      <CardTitle>{title}</CardTitle>
      <CardParagraph>{intro}</CardParagraph>
    </CardStyled>
  );
};

export default Card;
