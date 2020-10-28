import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import Helmet from 'react-helmet';
import '../styles/home.scss'
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          logo
          logoSmall
        }
      }
      headerImage: file(relativePath: { eq: "home-header-banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     }   
  `)

  return (
    <Layout>
      <Helmet>
        <html lang="en-US" />
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      {/* <SEO title="Home" /> */}
      <BackgroundImage className="home-header-banner" tag="main" fluid={data.headerImage.childImageSharp.fluid}>
      </BackgroundImage>
    </Layout>
  )
}
export default IndexPage
