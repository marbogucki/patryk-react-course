import { ReactText } from 'react';

type Button = {
  children: ReactText;
  bgColor: string;
  color: string;
};

export type ButtonProps = Pick<Button, 'children'> & Partial<Button>;
