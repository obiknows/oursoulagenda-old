/* eslint-disable import/first */
import React from "react"
import styled from "styled-components"

import BackHomeButton from "../components/backhomebutton"
import TitleHeader from "../components/titleheader"
import Layout from "../components/layout"
import SEO from "../components/seo"


// Data list for our services
var ourServices = [
  // YouTube Intro
  { name:'YouTube Intro', img:'', desc:'', category:'Branding', },
  // YouTube Song
  { name:'YouTube Song', img:'', desc:'', category:'Branding', },
  // YouTube Audit
  { name:'YouTube Intro', img:'', desc:'', category:'Branding', },
  // App Idea Consultation
  { name:'App Idea Consultation', img:'', desc:'', category:'App & Website', },
  // Website or Webstore
  { name:'Website or Webstore', img:'', desc:'', category:'App & Website', },
  // Website or Webstore
  { name:'Vanlife Consultation', img:'', desc:'', category:'Lifestyle', },
  // Vegan Transition
  { name:'Vegan Transition', img:'', desc:'', category:'Lifestyle', },
  // Digital Nomad Consult
  { name:'Digital Nomad Consultation', img:'', desc:'', category:'Lifestyle', },
];


const Services = () => {

  // Build the services List
  var ourServicesList = ourServices.map(svc => {
    return (
      <ServiceListItem>
        <h6 style={{color:'black'}}>{svc.name}</h6>
      </ServiceListItem>
    );
  })

  return (
    <Layout>
      <SEO title="Services" />
      <div style={{color:'white'}}>
        <TitleHeader title="Services" />
        <h3>Hey we do stuff. We could do some stuff for y'all.</h3>
        <h3>Check out these services below.</h3>
        {/* SERVICE TAB LIST */}
        <>
          <ServiceListContainer>
            {ourServicesList}
            {/* <ServiceListItem></ServiceListItem>
            <ServiceListItem></ServiceListItem>
            <ServiceListItem></ServiceListItem>
            <ServiceListItem></ServiceListItem>
            <ServiceListItem></ServiceListItem>
            <ServiceListItem></ServiceListItem> */}
          </ServiceListContainer>
        </>
        {/* SERVICE TAB LIST  -- END*/}
      </div>
      {/* Go Home Button */}
      <BackHomeButton/>
    </Layout>
  )
}

const ServiceListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media screen and (max-width: 768px) and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ServiceListItem = styled.div`
  background-color: gold;
  text-align: center;
  width: 100%;
  height: 100px;
`

export default Services
