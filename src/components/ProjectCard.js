import React from "react"
import styled from "styled-components"

export default function ProjectCard({ Image, Title, Description }) {
  return (
    <ProjectCardWrapper>
      <ProjectImage src={Image} />
      <ProjectTitle>{Title || "Title"}</ProjectTitle>
      <ProjectDescription>{Description || "Description"}</ProjectDescription>
      <ProjectButton>Go</ProjectButton>
    </ProjectCardWrapper>
  )
}

const ProjectCardWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 271px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
`
const ProjectImage = styled.img`
  position: absolute;
  width: 180px;
  height: 100px;
  left: 10px;
  top: 11px;
  background: #c4c4c4;
  border-radius: 5px;
`
const ProjectTitle = styled.h4`
  position: absolute;
  width: 27px;
  height: 14px;
  left: 88px;
  top: 47px;
  -webkit-text-stroke: 1px white;
`
const ProjectDescription = styled.p`
  position: absolute;
  width: 180px;
  height: 121px;
  left: 10px;
  top: 120px;
`
const ProjectButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 167px;
  top: 241px;

  border-radius: 10px;
  background: #c4c4c4;
`
