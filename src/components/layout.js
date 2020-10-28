import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from './navigation'
import Footer from './footer'
import "../styles/core.scss"
import "../styles/icons.scss"
import "../styles/utilities.scss"

const Layout = ({ children }) => {
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
    <div>
      <header>
        <Navigation />
      </header>
      { children}
      <Footer />
    </div>
  )
}

export default Layout
