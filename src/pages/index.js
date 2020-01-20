import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SoulGlobeImg from "../components/soulglobeimg"
import SoulGlobeText from "../components/soulglobetext"
import SEO from "../components/seo"

import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
          What's good Soul Squad, we're Aïssatou and Obinna. <br/>
          We're here to help you create and get to your soul's purpose in this life.
        </SoulHeaderText>
        <SoulHeaderText>
          What's good people, here are some words about what we do.
        </SoulHeaderText>
      </>
      
      {/* LINKS */}
      <SoulLinkSet>
        <Link to="/about" style={LinkStyle}>
          <SoulLinkText>About</SoulLinkText>
        </Link>
        <Link to="/support-us" style={LinkStyle}>
          <SoulLinkText>Support Us</SoulLinkText>
        </Link>
        <Link to="/videos" style={LinkStyle}>
          <SoulLinkText>Videos</SoulLinkText>
        </Link>
        <OutboundLink href="https://oursoulagenda.bigcartel.com" style={LinkStyle}>
          <SoulLinkText>Store</SoulLinkText>
        </OutboundLink>
        <Link to="/our-faves" style={LinkStyle}>
          <SoulLinkText>Our Faves</SoulLinkText>
        </Link>
        <Link to="/services" style={LinkStyle}>
          <SoulLinkText>Services</SoulLinkText>
        </Link>
        <Link to="/contact" style={LinkStyle}>
          <SoulLinkText>Contact</SoulLinkText>
        </Link>
      </SoulLinkSet>
    </SoulAgendaHomeContent>

    {/* SOULCIAL MEDIA ICONSSET */}

  </Layout>
)

const LinkStyle = {
  textDecoration: 'none',
  textTransform: 'uppercase'
}

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

const SoulLinkText = styled.h5`
`

// const SoulcialMediaIconsContainer = styled.div`
// `

// const SoulcialMediaIcon = styled.div``


export default IndexPage
