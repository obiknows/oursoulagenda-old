/* eslint-disable import/first */
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Services = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{color:'white'}}>
      <h1 style={{ fontSize: 88, textAlign: "center", letterSpacing: `0.22rem`, textTransform: 'uppercase'}}>Services</h1>
      <h3>Hey we do stuff. We could do some stuff for y'all.</h3>
      <h3>Check out these services below.</h3>

      {/* SERVICE TAB LIST */}
      <>
      </>
      {/* SERVICE TAB LIST  -- END*/}
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services
