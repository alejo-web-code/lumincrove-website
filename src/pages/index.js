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
      expertiseImage: file(relativePath: { eq: "pexels-timson-foox.png" }) {
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
      graphIconCarousel: file(relativePath: { eq: "graph-icon.png" }) {
          childImageSharp {
            fixed(width: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      improvementCarousel: file(relativePath: { eq: "setting-improve-icon.png" }) {
          childImageSharp {
            fixed(width: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      healthyCarousel: file(relativePath: { eq: "health-technology-icon.png" }) {
          childImageSharp {
            fixed(width: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }   
  `)

  const items = [
    {
      image: data.carouselImage.childImageSharp.fluid,
      icon: data.graphIconCarousel.childImageSharp.fixed,
      title: 'Do you want your business to be at the top?',
      content: 'Our mission is to make your ideas come to life, we make sure to focus on what matters most to you. Allow us to build your website using the most current features and trends in the digital world.',
      index: 0
    },
    {
      image: data.carouselImage.childImageSharp.fluid,
      icon: data.improvementCarousel.childImageSharp.fixed,
      title: 'Improving your website',
      style: 'secondary',
      content: 'Stay one step ahead of the competition by taking advantage of our platform and keep your site updated and built with a strong infrastructure to ensure visibility and engagement.',
      index: 1
    },
    {
      image: data.carouselImage.childImageSharp.fluid,
      icon: data.healthyCarousel.childImageSharp.fixed,
      title: 'We care about the health of your site',
      content: 'Quality Assurance is our top priority. Through rigorous checks we make sure you’re getting what you expect.  Allow our professionals to handle it and evaluate your site’s operation, design, speed, issues and other aspects that define its quality.',
      index: 2
    }
  ]

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
        <CarouselInfinite items={items} />
      </section>
      <BackgroundImage tag="section" className="expertise-section padding padding-top padding-bottom" fluid={data.expertiseImage.childImageSharp.fluid}>
        <div className="h-70">
          <h2 className="color-cta text-center margin-bottom-small">OUR EXPERTISE</h2>
          <p className="text-reversed padding-right padding-left">We work with technologies that achieve high performance and quality values that are highly in demand by current web deelopment standards</p>
        </div>
        <div className="text-center">
          <button className="button cta-reversed">SEE MORE</button>
        </div>
      </BackgroundImage>
    </Layout>
  )
}
export default IndexPage
