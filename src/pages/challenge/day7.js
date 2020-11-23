import React from "react"
import styled from "styled-components"
import ProjectLayout from "../../components/ProjectLayout"
import CenterImage from "../../images/day7/background.png"
import Circle from "../../images/day7/Circle.svg"
export default function day7() {
  return (
    <ProjectLayout>
      <HeroWrapper>
        <NavBar>
          <NavLogo>PLUG</NavLogo>
          <NavMenu>
            <NavItems>Order</NavItems>
            <NavItems>Learn More</NavItems>
            <NavItems>Contact Us</NavItems>
          </NavMenu>
        </NavBar>
        <MainImage src={CenterImage} />
        <div className="square" />
        <img className="circles-1" src={Circle} />
        <img className="circles-2" src={Circle} />
        <img className="circles-3" src={Circle} />

        <MainText>COMPUTERS FOR THE FUTURE</MainText>

        <DescriptionText>
          We are changing the way computers are used. <br></br> Just order
          online and plug in when it arrives. <br></br> No software to install.
        </DescriptionText>
      </HeroWrapper>
    </ProjectLayout>
  )
}

const HeroWrapper = styled.div`
  position: relative;
  background: #fffddb;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .square {
    position: absolute;
    width: 970px;
    height: 650px;
    left: 140px;
    top: 152px;

    border: 4px solid #e7686a;
    box-sizing: border-box;
  }

  .circles-1 {
    position: absolute;

    left: 509px;
    top: -20px;

    transform: rotate(-180deg);
  }

  .circles-2 {
    position: absolute;
    width: 475px;
    height: 475px;
    left: 512px;
    top: 656px;
  }

  .circles-3 {
    position: absolute;
    width: 475px;
    height: 475px;
    left: 1453px;
    top: 569px;
  }
`
const NavBar = styled.nav`
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto;
  padding: 15px;
  align-items: center;
`
const NavLogo = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  /* identical to box height */

  color: #e7686a;
`
const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: end;
  color: #e7686a;
`
const NavItems = styled.div``

const MainImage = styled.img`
  position: absolute;
  width: 970px;
  height: 650px;
  left: 200px;
  top: 99px;
  z-index: 1;
`
const MainText = styled.h1`
  position: absolute;
  width: 405px;
  height: 118px;
  left: 1060px;
  top: 325px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  z-index: 2;
  color: #e7686a;
`
const DescriptionText = styled.p`
  position: absolute;
  width: 400px;

  left: 1190px;
  top: 454px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  text-align: left;
  z-index: 2;
  color: #e7686a;
`
