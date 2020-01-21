/* eslint-disable import/first */
import React from "react"
import styled from "styled-components"


import BackHomeButton from "../components/backhomebutton"
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
        <ServiceListContainer>
          <ServiceListItem></ServiceListItem>
          <ServiceListItem></ServiceListItem>
          <ServiceListItem></ServiceListItem>
          <ServiceListItem></ServiceListItem>
          <ServiceListItem></ServiceListItem>
          <ServiceListItem></ServiceListItem>
        </ServiceListContainer>
      </>
      {/* SERVICE TAB LIST  -- END*/}
    </div>
    {/* Go Home Button */}
    <BackHomeButton/>
  </Layout>
)

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
  width: 100%;
  height: 100px;
`

export default Services
