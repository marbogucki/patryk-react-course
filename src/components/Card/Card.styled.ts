import styled from 'styled-components';

export const CardStyled = styled.article`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
`;

export const CardParagraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
`;
