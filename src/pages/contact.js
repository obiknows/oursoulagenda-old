import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{color: 'white'}}>
      <h1 style={{ fontSize: 88, textAlign: "center", letterSpacing: `0.22rem` }}>
          CONTACT
        </h1>
      <p>Whats good people.</p>
      <p>If you have an business inquiries or just want to leave us a message please use the </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Contact
