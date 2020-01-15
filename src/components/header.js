import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import soulglobe from '../images/our-soul-agenda-globe.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `0.1rem 0.05rem`,
      }}
    >
      <div style={{margin: `0 auto`, textAlign: 'center'}}>
        <img style={{marginBottom: 0}} src={soulglobe} height="30px" alt="Logo" />
      </div>
      <h1 class="signist" style={{ margin: 0, textAlign: 'center', lineHeight: `inherit`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
