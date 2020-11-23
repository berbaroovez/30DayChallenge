//rafce
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const header = () => {
  return (
    <>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
    </>
  )
}

export default header

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  width: 100vw;
  gap: 30px;
  justify-content: center;
`
const NavItem = styled(Link)`
  cursor: pointer;
  position: relative;
  text-align: center;
  padding-top: 20px;

  font-size: clamp(1rem, 5vw, 1.5rem);

  &:hover:after {
    position: absolute;
    content: "";
    height: 4px;
    width: 100%;
    background: black;
    top: 0;
    left: 0;
  }

  /* @media screen and (max-width: 868px) {
   font-size:
  } */
`
