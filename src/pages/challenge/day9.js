import React from "react"
import styled from "styled-components"
import ProjectLayout from "../../components/ProjectLayout"
import Twitter from "../../images/day9/Twitter.svg"
import Youtube from "../../images/day9/Youtube.svg"
import Facebook from "../../images/day9/Facebook.svg"
import ImageBG from "../../images/day9/image.svg"

import wave1 from "../../images/day9/wave1.svg"
import wave2 from "../../images/day9/wave2.svg"
import wave3 from "../../images/day9/wave3.svg"
export default function day9() {
  return (
    <ProjectLayout>
      <HeroWrapper>
        <NavBar>
          <NavLogo>AiBait</NavLogo>
          <NavButton>Get Started</NavButton>
        </NavBar>

        <ContentWrapper>
          <LeftColumn>
            <MainText>The End of Clickbait</MainText>
            <SecondText>
              Just paste a video link and our AI will print out what happens in
              the video
            </SecondText>
            <SocialsWrapper>
              <img src={Youtube} alt="Youtube logo" />
              <img src={Twitter} alt="Twitter logo" />
              <img src={Facebook} alt="Facebook logo" />
            </SocialsWrapper>
          </LeftColumn>
          <RightColumn>
            <div className="image" />
          </RightColumn>
        </ContentWrapper>
        <div className="wave1" />
        <div className="wave2" />
        <div className="wave3" />
      </HeroWrapper>
    </ProjectLayout>
  )
}

const HeroWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;
  background: linear-gradient(
    162.26deg,
    #ffffff 12.12%,
    rgba(91, 234, 254, 0.78) 91.8%
  );
  padding: calc((100vw - 1200px) / 2);

  .wave1 {
    background: url(${wave1});
    position: absolute;
    left: -600px;
    top: 500px;
    background-size: cover;
    width: 100vw;
    height: 439px;
    z-index: 1;
  }
  .wave2 {
    background: url(${wave2});
    position: absolute;
    left: 0px;
    top: 602px;
    background-size: cover;
    width: 100vw;
    height: 322px;
    z-index: 1;
  }
  .wave3 {
    background: url(${wave3});
    position: absolute;

    top: 502px;
    background-size: cover;
    width: 100vw;
    height: 412px;
    z-index: 1;
  }
`
const NavBar = styled.div`
  width: 70vw;
  position: absolute;
  display: grid;
  grid-template-columns: 200px 200px;
  justify-content: space-between;
  padding: 10px;
  top: 0;
`
const NavLogo = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 47px;
`
const NavButton = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 620px;
  gap: 100px;
`
const LeftColumn = styled.div`
  display: grid;
  grid-template-rows: 170px 140px 100px;
  gap: 10px;
`
const MainText = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 82px;
  z-index: 4;
  color: #000000;
`
const SecondText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
  line-height: 41px;
  z-index: 4;
`
const SocialsWrapper = styled.div`
  z-index: 4;
  display: grid;
  width: 300px;
  grid-template-columns: auto auto auto;
  align-items: center;
  opacity: 0.79;
`
const RightColumn = styled.div`
  z-index: 4;
  .image {
    width: 600px;
    height: 350px;
    background: url(${ImageBG}),
      linear-gradient(
        180deg,
        rgba(32, 81, 255, 0.6) 0%,
        rgba(140, 82, 175, 0.486) 100%
      );
    background-size: cover;
    backdrop-filter: blur(4px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
    transform: matrix(0.99, -0.06, -0.13, 1, 0, 0);
    transition: 0.4s ease-in-out;
    :hover {
      transform: matrix(0.99, 0, 0, 1, 0, 0);
    }
  }
`
