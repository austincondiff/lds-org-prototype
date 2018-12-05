import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" href="https://use.typekit.net/alk8vrh.css" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <div
            style={{
              height: 128,
              backgroundColor: '#eff0f0',
            }}
          />
          {children}
        </div>
        <CallToAction
          title="Not a member and want to learn more?"
          description="Visit mormon.org for more information about our Savior Jesus Christ and His eternal plan for you."
          buttonLabel="Find out more"
          path="mormon.org"
        />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout