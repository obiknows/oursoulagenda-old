import React from "react"

import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/titleheader"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div style={{color: 'white', textAlign: 'center'}}>
      <TitleHeader title="Contact Us" />
      <h3>If you have an business inquiries or just want to leave us a message please use the gold button on the bottom right corner of your screen</h3>
      <h3>We'll get back to you as soon as we can</h3>
      <h3>Thanks</h3>
      {/* Go Home Button */}
      <BackHomeButton/>
    </div>
  </Layout>
)

export default Contact
