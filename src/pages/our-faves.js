import React from "react"
import styled from "styled-components"

import BackHomeButton from "../components/backhomebutton"
import Layout from "../components/layout"
import SEO from "../components/seo"

const OurFaves = () => (
  <Layout>
    <SEO title="Our Faves" />
    <div style={{color:'white'}}>
      <h1 style={{textAlign: 'center', fontSize: 88, letterSpacing: `0.22rem`, textTransform: 'uppercase'}}>Our Faves</h1>
      <h3>Here's a few of our favorite things that we use in van life and in real life.</h3>

      {/* SERVICE TAB LIST */}
      <>
        <FavListContainer>
          <FavListItem></FavListItem>
          <FavListItem></FavListItem>
          <FavListItem></FavListItem>
          <FavListItem></FavListItem>
          <FavListItem></FavListItem>
          <FavListItem></FavListItem>
        </FavListContainer>
      </>
      {/* SERVICE TAB LIST  -- END*/}

      {/* Go Home Button */}
      <BackHomeButton/>
    </div>
  </Layout>
)

const FavListContainer = styled.div`
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

const FavListItem = styled.div`
  background-color: gold;
  width: 100%;
  height: 100px;
`

export default OurFaves
