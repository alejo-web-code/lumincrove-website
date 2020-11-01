import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import Helmet from 'react-helmet';
import CarouselInfinite from '../components/carousel/infinite'
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
      headerImage: file(relativePath: { eq: "home-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carouselImage: file(relativePath: { eq: "carousel-item-1.png" }) {
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
      <BackgroundImage className="home-header-banner text-center padding" tag="main" fluid={data.headerImage.childImageSharp.fluid}>
        <div className="flex column h-80 margin-top">
          <h1>We say: <span className="block">Every business has a code...</span></h1>
          <p className="padding"> because we believe that behind a good project there needs to be a solid, professional and committed team.</p>
          <div className="m-auto">
            <div className="margin-bottom">
              <p>You give the idea...</p>
              <h4>We show the results</h4>
            </div>
            <Link to="#" className="button cta margin-top">GET STARTED</Link>
          </div>
        </div>
      </BackgroundImage>
      <section>
        <CarouselInfinite images={data.carouselImage.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}
export default IndexPage
