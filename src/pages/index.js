import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../mystyles.scss"

import Hero from "../components/LayoutComponents/Hero"

const IndexPage = () => (
  <Layout>
    <Hero mainText={"Test"} subText={"Test"}></Hero>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
