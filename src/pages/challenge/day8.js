import React from "react"
import styled from "styled-components"
import ProjectLayout from "../../components/ProjectLayout"
import toaster from "../../images/day8/toasterLUL.png"
import rectangle from "../../images/day8/rectangle.svg"
import poly from "../../images/day8/poly.svg"
export default function day8() {
  return (
    <ProjectLayout>
      <HeroWrapper>
        <NavLogo>AppliCoin</NavLogo>
        <img src={toaster} className="toaster" />
        <img src={poly} className="poly" />
        <img src={rectangle} className="rectangle-1" />
        <img src={rectangle} className="rectangle-2" />

        <MainText>LET YOUR OLD APPLIANCES MAKE YOU MONEY</MainText>
        <SecondText>
          Join the revolution today and earn a second income for yourself
        </SecondText>
        <Button>
          <ButtonText>LEARN MORE</ButtonText>
        </Button>
      </HeroWrapper>
    </ProjectLayout>
  )
}

const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #c6abdb 0%,
    #74a0f1 83.85%,
    #74a0f1 99.99%,
    #649ef5 100%
  );
  overflow: hidden;
  .poly {
    position: absolute;
    width: 600px;
    height: 600px;
    left: 190.59px;
    top: 50px;
    z-index: 1;
  }

  .toaster {
    z-index: 2;
    position: absolute;
    width: 365px;
    height: 401px;
    left: 300px;
    top: 131px;
  }

  .rectangle-1 {
    position: absolute;
    width: 720px;
    height: 707px;
    left: -12.9px;
    top: 287px;
  }
  .rectangle-2 {
    position: absolute;
    width: 720px;
    height: 707px;
    left: 1279.1px;
    top: -377px;
    transform: rotate(20.03deg);
  }
`

const NavLogo = styled.nav`
  position: absolute;
  width: 195px;
  height: 47px;
  left: 17px;
  top: 37px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  text-align: right;

  color: #ffffff;
`

const MainText = styled.h1`
  position: absolute;
  width: 615px;
  height: 585px;
  left: 643px;
  top: 48px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 117px;
  text-align: right;

  color: #ffffff;

  &:after {
    position: absolute;
    bottom: -30px;
    right: 0;
    content: "";
    background: #1e78ff;
    width: 60%;
    height: 30px;
    opacity: 0.7;
  }
`

const SecondText = styled.p`
  position: absolute;
  width: 330px;
  height: 105px;
  left: 333px;
  top: 550px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  text-align: right;

  color: #ffffff;
`

const Button = styled.button`
  position: absolute;
  width: 420px;
  height: 79px;
  left: 568px;
  top: 707px;
  border: none;
  background: #649ef5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

const ButtonText = styled.div`
  position: absolute;
  width: 285px;
  height: 38px;
  left: 50px;
  top: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;

  text-align: right;

  color: #ffffff;
`

// const HeroWrapper = styled.div``
