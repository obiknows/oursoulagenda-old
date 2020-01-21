import React from "react"

import BackHomeButton from "../components/backhomebutton"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div style={{color:'white'}}>
      <h1 style={{fontSize: 88, textAlign: 'center', letterSpacing: `0.22rem`, textTransform: 'uppercase'}}>About Us</h1>
      <h3>Our story starts out with love.</h3>
      <h3 style={{textAlign: 'right'}}>A love that started out as a friendship</h3>
      {/* Go Home Button */}
      <BackHomeButton/>
    </div>
  </Layout>
)

export default About
