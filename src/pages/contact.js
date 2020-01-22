import React from "react"

import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/titleheader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div style={{color: 'white'}}>
      <TitleHeader title="Contact Us" />
      <h3>Whats good people.</h3>
      <h3>If you have an business inquiries or just want to leave us a message please use the </h3>
      {/* Go Home Button */}
      <BackHomeButton/>
    </div>
  </Layout>
)

export default Contact
