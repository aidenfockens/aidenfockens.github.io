import React from 'react';
import { NavbarContainer, NavLink } from './Styles';

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/work-experience">Work Experience</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/assignments">Assignments</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;