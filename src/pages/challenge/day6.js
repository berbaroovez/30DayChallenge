import React from "react"
import styled from "styled-components"
import ProjectLayout from "../../components/ProjectLayout"
import MainImage from "../../images/day6/main.svg"
import LeftImage from "../../images/day6/left.svg"
import CenterImage from "../../images/day6/middle.svg"
import RightImage from "../../images/day6/right.svg"
export default function day6() {
  return (
    <ProjectLayout>
      <HeroWrapper>
        <NavBar>
          <NavLogo>HOSPALYTICS</NavLogo>
          <NavMenu>REQUEST DEMO</NavMenu>
        </NavBar>

        <MainCard>
          <LeftColumn>
            <MainText>All of your data in a easy to read format</MainText>
            <DescriptionText>
              Our dashboard offers the easiest way to read all of your hospitals
              data
            </DescriptionText>
          </LeftColumn>
          <RightColumn>
            <CardGraphic src={MainImage} />
          </RightColumn>
        </MainCard>
        <LowerCards>
          <LittleCard>
            <LittleImage src={LeftImage} />
            <LittleText>
              We can import data from any type of file or database in the world
            </LittleText>
          </LittleCard>
          <LittleCard>
            <LittleImage src={CenterImage} />
            <LittleText>
              We have over 50 different ways to visualize your data
            </LittleText>
          </LittleCard>
          <LittleCard>
            <LittleImage src={RightImage} />
            <LittleText>
              Login from anywhere. Including your phone or tablet.
            </LittleText>
          </LittleCard>
        </LowerCards>
        <Testimonials>TESTIMONIALS</Testimonials>
      </HeroWrapper>
    </ProjectLayout>
  )
}

const HeroWrapper = styled.div`
  padding: 0 calc((100vw - 1000px) / 2);
`
const NavBar = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: auto auto;
`
const NavLogo = styled.h3``
const NavMenu = styled.h3`
  text-align: end;
`
const MainCard = styled.div`
  width: 1000px;
  height: 502px;

  background: #f86161;
  border-radius: 40px;
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 20px;
`
const LeftColumn = styled.div`
  display: grid;
  grid-template-rows: 200px 87px;
  justify-content: center;
  align-content: center;
`
const MainText = styled.h1`
  width: 400px;

  font-size: 3rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;

  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const DescriptionText = styled.p`
  width: 400px;
  height: 87px;
  color: #444444;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;

  animation: fadeIn 1.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const RightColumn = styled.div`
  display: grid;

  align-content: center;
`
const CardGraphic = styled.img`
  width: 460px;
  height: 323px;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const LowerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 20px;
`
const LittleCard = styled.div`
  padding: 10px;
  background: #b7ebb2;
  border-radius: 20px;
  height: 195px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: #444444;
  &:nth-child(3) {
    background: #9c3e3e;
    color: white;
  }
`
const LittleImage = styled.img`
  width: 125px;
  height: 92px;
`
const LittleText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
`

const Testimonials = styled.h2`
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 52px;
`
