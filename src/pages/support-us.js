import React from "react"
import { Link } from "gatsby"

import BackHomeButton from "../components/backhomebutton"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SupportUs = () => (
  <Layout>
    <SEO title="Support Us" />
    <div style={{color:'white'}}>
      <h1 style={{fontSize:88, textAlign: 'center', letterSpacing: `0.22rem`, textTransform: 'uppercase'}}>Support Us</h1>
      <h4>Love what we do?</h4>
      <h4>Learned from our videos?</h4>
      <h4>Got a lil' extra on the tax returns?</h4>
      <h4>If we've ever done anything for you or you just felt like supporting us feel free to do it below</h4>
      <h4>Love and Light Soul Squad</h4>
      {/* Shop and support */}
      
      {/* Remind people that if they click the links from our Amazon, w/in 24 Hours, we still get our cut. */}


      {/* Links to PayPal / Patreon */}
      <div style={{marginTop: 50, textAlign:'center'}}>
        <Link to="/" style={{color: 'white', backgroundColor: '#3b7bbf', padding: 10, /*fontFamily: 'Lalezar',*/ fontWeight: 700, textDecoration: 'none'}}>
          Donate with PayPal
        </Link>
      </div>

      <div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="oursoulagenda@gmail.com" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>


      {/* Go Home Button */}
      <BackHomeButton/>
    </div>
  </Layout>
)

export default SupportUs
