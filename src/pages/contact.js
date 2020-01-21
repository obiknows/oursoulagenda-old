import React from "react"

import BackHomeButton from "../components/backhomebutton"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{color: 'white'}}>
      <h1 style={{ fontSize: 88, textAlign: "center", letterSpacing: `0.22rem`, textTransform: `uppercase` }}>Contact</h1>
      <h3>Whats good people.</h3>
      <h3>If you have an business inquiries or just want to leave us a message please use the </h3>
      {/* Go Home Button */}
      <BackHomeButton/>
    </div>
  </Layout>
)

export default Contact
