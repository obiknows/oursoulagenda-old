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
    <SoulAgendaHomeContent>
      {/* ABOUT US/ PURPOSE INTRO */}
      <>
        <SoulHeaderText>
          What's good Soul Fam, we're Aïssatou and Obinna. <br/>
          We're here to help you create and get to your soul's purpose in this life.
        </SoulHeaderText>
        <SoulHeaderText>
          What's good people, here are some words about what we do.
        </SoulHeaderText>
      </>
      
      {/* LINKS */}
      <SoulLinkSet>
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
      </SoulLinkSet>
    </SoulAgendaHomeContent>
  </Layout>
)

// STYLED COMPONENTS
const SoulAgendaHomeContent = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
`

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
  color: 'white';
  letter-spacing: 2.2;
  word-spacing: 0rem;
`

const SoulHeaderText = styled.h3`
  color: white;
  text-align: center;
`

const SoulLinkSet = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  display: grid;
  justify-content: space-around;
  grid-template-columns: auto auto auto auto auto auto auto; 

  // for medium sized screens break to vertical
  @media screen and (max-width: 768px) {
    text-align: center;
    grid-template-columns: auto;
  }
`


export default IndexPage
