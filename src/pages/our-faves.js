import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OurFaves = () => (
  <Layout>
    <SEO title="Our Faves" />
    <div style={{color:'white'}}>
      <h1 style={{textAlign: 'center', fontSize: 88, letterSpacing: `0.22rem`, textTransform: 'uppercase'}}>Our Faves</h1>
      <h3>Here's a few of our favorite things that we use in van life and in real life.</h3>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default OurFaves
