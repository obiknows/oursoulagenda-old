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
    {/* OUR SOUL AGENDA HEADER */}
    <h1 className="signist" style={{fontSize: 88, textAlign: 'center', color: 'white', letterSpacing: 2.2, wordSpacing: `0rem`}}>OUR SOUL AGENDA</h1>
    {/* CONTENT */}
    <div style={{paddingLeft:`2rem`, paddingRight:`2rem`, display: 'flex', flexDirection: 'column',}}>
      
      {/* ABOUT US/ PURPOSE INTRO */}
      <h3 style={{textAlign: 'center', color: 'white'}}>
        What's good Soul Fam, we're Aïssatou and Obinna. <br/>
        We're here to help you create and get to your soul's purpose in this life.
      </h3>
      <h3 style={{textAlign: 'center', color: 'white'}}>What's good people, here are some words about what we do.</h3>
      
      {/* LINKS */}
      <div style={{paddingLeft: `3rem`, paddingRight: `3rem`, display:'flex', justifyContent: 'space-around', }}>
        <Link to="/about" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>About</h5>
        </Link>
        <Link to="/support-us" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>Support Us</h5>
        </Link>
        <Link to="/videos" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>Videos</h5>
        </Link>
        <a href="https://oursoulagenda.bigcartel.com" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>Store</h5>
        </a>
        <Link to="/our-faves" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>Our Faves</h5>
        </Link>
        <Link to="/services" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>Services</h5>
        </Link>
        <Link to="/contact" style={{textDecoration: 'none', textTransform: 'uppercase'}}>
          <h5>Contact</h5>
        </Link>
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
