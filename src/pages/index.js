import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CallLogo from "../components/call"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Dude, this great practice, mon ami. You can do it!</h1>
    <CallLogo src={"images/gatsby-icon.png"} alt={"phone call icon"} />
    <p>Keep up the great work, man.</p>
    <h2>You can learn on this, then will come your first app. Be excited!!</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
