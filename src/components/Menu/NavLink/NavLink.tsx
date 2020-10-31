import React from 'react';
import { NavLinkProps } from './NavLink.model';

const NavLink = ({ to, children }: NavLinkProps) => {
  return <a href={to}>{children}</a>;
};

export default NavLink;
