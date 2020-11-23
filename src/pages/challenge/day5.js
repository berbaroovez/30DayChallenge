import React from "react"
import styled from "styled-components"
import ImageBG from "../../images/day5.jpg"
import ProjectLayout from "../../components/ProjectLayout"
import { BiChevronsDown } from "react-icons/bi"
export default function day5() {
  return (
    <ProjectLayout>
      <HeroWrapper>
        <Nav>
          <NavLogo>STICKY</NavLogo>

          <NavMenu>
            <NavItem>ABOUT</NavItem>
            <NavItem>LOGIN</NavItem>
          </NavMenu>
        </Nav>
        <TopHalfHero>
          <HeroCardWrapper>
            <TopText>JOIN THE</TopText>
            <ClubText>STICKY CLUB</ClubText>
            <Description>
              We offer the best community of sticker makers in the world
            </Description>
            <CardButton>Join Today</CardButton>
          </HeroCardWrapper>
        </TopHalfHero>
        <LowerHalfText>
          <SearchText>View Our Creators Stickers</SearchText>
          <Icon size={70} />
        </LowerHalfText>
      </HeroWrapper>
    </ProjectLayout>
  )
}

const Icon = styled(BiChevronsDown)`
  animation: bounce 2s infinite;
  padding-top: 20px;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`
const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`
const TopHalfHero = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 69.27%),
    url(${ImageBG});
  background-size: cover;
`
const Nav = styled.nav`
  position: absolute;
  top: 15px;
  left: 0;
  width: 100vw;
  display: grid;
  grid-template-columns: auto auto;
  color: #ff1e1e;
  font-family: Rock Salt;
  z-index: 4;
`
const NavLogo = styled.p`
  font-family: Rock Salt;
  padding-left: 20px;
  font-size: 30px;
  /* identical to box height */
`
const NavMenu = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  justify-content: end;
`
const NavItem = styled.p`
  font-family: Rock Salt;
`
const HeroCardWrapper = styled.div`
  position: absolute;
  width: 280px;
  height: 339px;
  left: 200px;
  top: 400px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(255, 163, 163, 0.25),
    0px 4px 10px 10px rgba(185, 112, 112, 0.3);
  border-radius: 20px;

  display: grid;
  grid-template-rows: repeat(4, auto);
  align-content: space-around;
  justify-items: center;
`
const TopText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
`
const ClubText = styled.p`
  font-family: Rock Salt;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 72px;
  /* identical to box height */

  text-align: center;

  color: #ff1e1e;
`
const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`
const CardButton = styled.button`
  width: 182px;
  height: 55px;

  color: white;
  background: #c66565;
  border-radius: 10px;
  border: none;
  font-size: 20px;
`

const LowerHalfText = styled.div`
  position: absolute;
  left: 40%;
  top: 76vh;
  z-index: 5;
  text-align: center;
`
const SearchText = styled.h3``
