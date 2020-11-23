import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ProjectLayout from "../../components/ProjectLayout"
export default function Concept_3() {
  return (
    <ProjectLayout>
      <HomescreenWrapper>
        <Navbar>
          <NavLogo to="/" />
          <NavMenu>
            <NavItem className="first">HOW IT WORKS</NavItem>
            <NavItem>DOWNLOAD</NavItem>
            <NavItem>CONTACT</NavItem>
          </NavMenu>
        </Navbar>
        <TextWrapper>
          <MainText>
            ITS 10PM ON A FRIDAY YOU REALISE YOU LEFT YOUR WALLET AT HOME YOUR
            FRIEND CAN BUY YOU DRINKS.{" "}
            <span>YOU CAN PAY THEM WITH YOUR PHONE.</span>
          </MainText>
          <Button>LEARN MORE ABOUT EZ CA$H</Button>
        </TextWrapper>
      </HomescreenWrapper>
    </ProjectLayout>
  )
}

const HomescreenWrapper = styled.div`
  background: #f4f2dc;
  width: 100vw;
  height: 100vh;
`
const Navbar = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`
const NavLogo = styled(Link)`
  position: absolute;
  top: 10px;
  left: 20px;
  height: 35px;
  width: 35px;
  background: url("https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x");
  background-size: 35px;
`
const NavMenu = styled.div`
  display: grid;
  grid-template-columns: 130px 130px 100px;
  text-align: center;
  position: relative;
  .first:hover:after {
    position: absolute;
    content: "";
    height: 4px;
    width: 35%;
    background: #49c235;
    top: 0;
    left: 0;
  }
`
const NavItem = styled.p`
  padding: 20px 0;

  /*  */
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 30px;
`
const MainText = styled.h1`
  margin: 0 auto;
  width: 1237px;
  height: 702px;
  font-size: 90px;
  line-height: 117px;
  text-align: center;

  span {
    color: #49c235;
  }
`
const Button = styled.button`
  margin: 0 auto;

  color: #49c235;
  border: 4px #49c235 solid;
  padding: 10px 40px;
  font-size: 1.2rem;
  background: none;
  text-align: center;
`
