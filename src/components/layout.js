/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          minHeight: `100vh`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: `2.22rem`,
        }}
      >
        <main style={{minHeight: `100vh`}}>{children}</main>
      </div>
      <footer style={{textAlign: 'center', backgroundColor: '#FEC502', paddingTop: `1rem`, paddingBottom: `1rem`,}}>
        <>
        © {new Date().getFullYear()}, Built by  
        {` `}
        <a href="https://instagram.com/itsobinna">Obinna</a> &
        {` `}
        <a href="https://imewe.xyz">IMEWE Inc.</a>
        , All Rights Reserved
        </>
        <div>
          <a href="https://imewe.xyz">About</a>
          {` `}
          <a href="https://imewe.xyz">Terms of Use</a>
          {` `}
          <a href="https://imewe.xyz">Privacy</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
