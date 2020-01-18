import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SoulGlobeImg from "../components/soulglobeimg"
import SoulGlobeText from "../components/soulglobetext"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout style={{marginTop: `2.22rem`}}>
    <SEO title="Home" />
    {/* SOUL GLOBE */}
    <SoulGlobe>
      <SoulGlobeImg style={{textAlign: 'center'}} />
    </SoulGlobe>
    {/* OUR SOUL AGENDA HEADER */}
    <SoulAgendaHeader>
      <SoulGlobeText style={{textAlign: 'center'}} />
    </SoulAgendaHeader>
    {/* CONTENT */}
    <div style={{paddingLeft:`2rem`, paddingRight:`2rem`, display: 'flex', flexDirection: 'column',}}>
      
      {/* ABOUT US/ PURPOSE INTRO */}
      <h3 style={{textAlign: 'center', color: 'white'}}>
        What's good Soul Fam, we're Aïssatou and Obinna. <br/>
        We're here to help you create and get to your soul's purpose in this life.
      </h3>
      <h3 style={{textAlign: 'center', color: 'white'}}>What's good people, here are some words about what we do.</h3>
      
      {/* LINKS */}
      <div style={{paddingLeft: `3rem`, paddingRight: `3rem`, display:'grid', justifyContent: 'space-around', gridTemplateColumns: `auto auto auto auto auto auto auto`, }}>
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

// STYLED COMPONENTS
const SoulGlobe = styled.div`
  max-width: 122px;
  text-align: 'center';
  margin-bottom: 0.22rem;
  margin: 0 auto;
`

const SoulAgendaHeader = styled.div`
  max-width: 80vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: auto;
  margin-right: auto;
  // text-align: 'center';
  color: 'white';
  letter-spacing: 2.2;
  word-spacing: 0rem;
`

export default IndexPage
