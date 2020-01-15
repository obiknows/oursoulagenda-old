import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout style={{marginTop: `2.22rem`}}>
    <SEO title="Home" />
    {/* SOUL GLOBE */}
    <div style={{ maxWidth: `122px`, textAlign: 'center',  marginBottom: `0.22rem`, margin: `0 auto`, }}>
      <Image style={{textAlign: 'center'}} />
    </div>
    {/* OUR SOUL AGENDA FONT */}
    <h1 className="signist" style={{fontSize: 88, textAlign: 'center', color: 'white', letterSpacing: 2.2}}>OUR SOUL AGENDA</h1>
    <h3 style={{textAlign: 'center', color: 'white'}}>What's good people, here are some words about us.</h3>
    <h3 style={{textAlign: 'center', color: 'white'}}>What's good people, here are some words about what we do.</h3>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
