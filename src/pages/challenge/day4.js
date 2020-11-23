import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaSearch } from "react-icons/fa"
import ProjectLayout from "../../components/ProjectLayout"
import PlayCard from "../../components/PlayCard"
import Orange from "../../images/VectorOrangeCircle.svg"
import Blue from "../../images/GroupBlueCircle.png"

export default function day4() {
  return (
    <ProjectLayout>
      <HeroWrapper>
        <div className="orange"></div>
        <div className="blue"></div>
        {/* <BlueCircle /> */}
        <NavBar>
          <NavLogo>PlayTunes</NavLogo>
          <NavSearch>
            <InnerSearch>Search...</InnerSearch>
            <FaSearch />
          </NavSearch>
        </NavBar>

        <CardWrapper>
          <CardText>NO ACCOUNT NEEDED</CardText>
          <CardText>LISTEN TO YOUR FAVORITE ARTIST</CardText>
          <CardText>LET US PAY THEM FOR YOU</CardText>
        </CardWrapper>
        <div className="card-1">
          <PlayCard />
        </div>
        <div className="card-2">
          <PlayCard />
        </div>
        <div className="card-3">
          <PlayCard />
        </div>
        <div className="card-4">
          <PlayCard />
        </div>
      </HeroWrapper>
    </ProjectLayout>
  )
}

const HeroWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135.39deg, #ffb016 24.83%, #fadc3d 66.5%), #ffffff;

  /* .orange {
    width: 500px;
    height: 500px;

    background: url("../../images/VectorOrangeCircle.svg");
  } */
  .blue {
    position: absolute;
    top: 150px;
    right: -200px;
    width: 890px;
    height: 800px;
    background: url(${Blue});
    background-repeat: no-repeat;
    z-index: 2;
  }
  .card-1 {
    position: absolute;
    left: 1073px;
    top: 295px;
    z-index: 3;
  }
  .card-2 {
    position: absolute;
    left: 1139px;
    top: 367px;
    z-index: 4;
  }
  .card-3 {
    position: absolute;
    left: 1336px;
    top: 425px;
    z-index: 5;
  }
  .card-4 {
    position: absolute;
    left: 1100px;
    top: 459px;
    z-index: 6;
  }
`
const NavBar = styled.div`
  height: 60px;
  width: 100vw;
  display: grid;
  grid-template-columns: 100px 400px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`
const NavLogo = styled(Link)`
  font-weight: 600;
  font-size: 2rem;
`
const NavSearch = styled.div`
  width: 300px;
  height: 40px;
  background: rgba(203, 203, 203, 0.9);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 270px 30px;
  align-items: center;
  gap: 5px;
`
const InnerSearch = styled.p`
  text-align: center;
  margin-left: 10px;
  background: rgba(181, 179, 179, 0.7);
  border-radius: 5px;
  padding: 5px 0;
  opacity: 0.8;
`
const SearchIcon = styled.div``

const CardWrapper = styled.div`
  position: absolute;
  width: 349px;
  height: 582px;
  left: 118px;
  top: 200px;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;

  box-shadow: 0px 16.3881px 32.7761px rgba(99, 30, 187, 0.5);
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-content: space-around;
  justify-content: center;
`

const CardText = styled.h3`
  text-align: center;
  font-size: 40px;
`
const PlayCardWrapper = styled.div``
