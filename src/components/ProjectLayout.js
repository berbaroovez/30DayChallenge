import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import "./layout.css"
const ProjectLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default ProjectLayout
