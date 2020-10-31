import React from 'react';
import { NavProps } from './Nav.models';

const Nav = ({ children }: NavProps) => {
  return <nav>{children}</nav>;
};

export default Nav;
