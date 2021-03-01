import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>I need...</h2>
    <Menu />
  </Layout>
)

export default IndexPage
