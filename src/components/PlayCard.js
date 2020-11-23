import React from "react"
import styled from "styled-components"

import { FaPlayCircle } from "react-icons/fa"

export default function PlayCard() {
  return (
    <PlayCardWrapper>
      <SongWindow></SongWindow>
      <IconWrapper>
        <FaPlayCircle size={42} />
      </IconWrapper>
    </PlayCardWrapper>
  )
}

const PlayCardWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 280px;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`
const SongWindow = styled.div`
  position: absolute;
  width: 262px;
  height: 160px;
  left: 18px;
  top: 20px;
  background: rgba(196, 196, 196, 0.8);
  border-radius: 10px;
`

const IconWrapper = styled.div`
  position: absolute;
  left: 45%;
  top: 70%;
`

//  <PlayCardWrapper>
//       <SongWindow></SongWindow>
//       <FaRegPlayCircle />
//     </PlayCardWrapper>
