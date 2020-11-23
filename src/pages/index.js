import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import Pic from "../images/TESTREACT.png"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <ProjectCard
      Image={Pic}
      Title="30 Day Challenge"
      Description="Create one webpage a day for 30 days. 1 hour to design and implement each page."
    />
  </Layout>
)

export default IndexPage
