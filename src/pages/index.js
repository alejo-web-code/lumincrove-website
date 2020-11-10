import React, { useEffect, useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout";
import WhyUs from "../components/whyus"
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import ButtonLink from '../components/buttonLink';
import CarouselInfinite from '../components/carousel/infinite'
import '../styles/home.scss'
import '../styles/modals.scss'
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
      toolsImage: file(relativePath: { eq: "develop-tools.png" }) {
          childImageSharp {
            fixed(width: 55) {
              ...GatsbyImageSharpFixed
          }
        }
      }
      managmentImage: file(relativePath: { eq: "management-net.png" }) {
          childImageSharp {
            fixed(width: 55) {
              ...GatsbyImageSharpFixed
          }
        }
      }
      websiteImage: file(relativePath: { eq: "website-devices.png" }) {
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
  ];

  const [viewportWidth, setViewportWidth] = useState('')
  const [modalOn, setModalOn] = useState(false)
  let modalClass;
  let modalContentClass;
  let whatWeDo;

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setViewportWidth(window.innerWidth);
    };

    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);

    modalOn ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
  })

  const toggleModal = () => {
    modalOn ? setModalOn(false) : setModalOn(true)
  }

  if (!modalOn) {
    modalClass = "modal"
    modalContentClass = "margin-bottom modal-content"
  }
  else {
    modalClass = "modal open"
    modalContentClass = "margin-bottom modal-content"
  }

  if (viewportWidth < '910') {
    whatWeDo = (
      <CarouselInfinite items={items} width={viewportWidth} />
    )
  }
  else {
    whatWeDo = (
      <div className="flex center padding-left padding-right padding-top padding-bottom margin-bottom">
        {items.map((element, index) => {
          let titleClass = element.style ? "color-secondary inline-block" : "color-primary inline-block";

          return (
            <div className="w-3 flex column padding" key={index}>
              <BackgroundImage className="banner-imagen flex column end" tag="div" fluid={element.image}>
                <h2 className="text-reversed padding">WHAT WE DO</h2>
              </BackgroundImage>
              <div className="margin-top h-60">
                <div className="flex align-center">
                  <Img fixed={element.icon} className="margin-right" />
                  <h4 className={titleClass}>{element.title}</h4>
                </div>
                <div className="">
                  <p>{element.content}</p>
                </div>
              </div>
              <div className="text-center">
                <ButtonLink url="#" style="button cta margin-top" name="SEE OFFERS" />
              </div>
            </div>
          )
        })}
      </div>
    )
  }


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
      <BackgroundImage className="home-header-banner responsive text-center padding" tag="main" fluid={data.headerImage.childImageSharp.fluid}>
        <div className="flex column h-80 w-2 margin-top margin-left">
          <h1>We say: <span className="block">Every business has a code...</span></h1>
          <p className="padding"> because we believe that behind a good project there needs to be a solid, professional and committed team.</p>
          <div className="m-auto">
            <div className="margin-bottom">
              <p>You give the idea...</p>
              <h4>We show the results</h4>
            </div>
            <ButtonLink url="#" style="button cta margin-top" name="GET STARTED" />
          </div>
        </div>
      </BackgroundImage>
      <section>
        {whatWeDo}
      </section>
      <BackgroundImage tag="section" className="expertise-section padding padding-top padding-bottom" fluid={data.expertiseImage.childImageSharp.fluid}>
        <div className="h-70 responsive padding-top">
          <h2 className="color-cta text-center margin-bottom-small">OUR EXPERTISE</h2>
          <div className="w-2 m-h-auto">
            <p className="text-reversed padding-right padding-left">We work with technologies that achieve high performance and quality values that are highly in demand by current web deelopment standards</p>
          </div>
        </div>
        <div className="text-center">
          <button className="button cta-reversed" onClick={toggleModal}>SEE MORE</button>
        </div>
      </BackgroundImage>
      <WhyUs viewportWidth={viewportWidth} />
      <section className={modalClass} aria-hidden="true">
        <div className={modalContentClass}>
          <div className="flex wrap margin-bottom responsive">
            <div className="w-2 margin-bottom">
              <div className="m-h-auto text-center w-4 border-botton-primary">
                <Img className="margin-bottom-small" fixed={data.managmentImage.childImageSharp.fixed} />
              </div>
              <div className="padding-small">
                <h2 className="text-center margin-bottom-small color-primary-strong">NoSQL Databases</h2>
                <div className="padding-left padding-right">
                  <p className="text-left">NoSQL databases are built on a strong object structure which makes it flexible, scalable, and capable of rapidly responding to the data management demands of modern businesses.</p>
                </div>
              </div>
            </div>
            <div className="w-2 margin-bottom">
              <div className="m-h-auto text-center w-4 border-botton-soft-blue">
                <Img className="margin-bottom-small" fixed={data.websiteImage.childImageSharp.fixed} />
              </div>
              <div className="padding-small">
                <h2 className="text-center margin-bottom-small color-primary">Hibrid Websites</h2>
                <div className="padding-left padding-right">
                  <p className="text-left">By taking advantage of a strong server side rendering and dynamic sites we’ll make it possible to get a fast, scalable, secure, low cost and multi-platform website. With the features of PWA (Progressive Web Application) which dissipates the barrier between web and native applications.</p>
                </div>
              </div>
            </div>
            <div className="w-2 margin-bottom m-h-auto">
              <div className="m-h-auto text-center w-4 border-botton-cta">
                <Img className="margin-bottom-small" fixed={data.toolsImage.childImageSharp.fixed} />
              </div>
              <div className="padding-small">
                <h2 className="text-center margin-bottom-small color-cta">Strong Tools</h2>
                <div className="padding-left padding-right">
                  <p className="text-left">The usage of tools as SSL (Secure Socket Layer) protocol, GTM (google tag manager) and Google Analytics, completes our work and makes it strong, trustworthy, secure, manageable and integrable with others platforms.</p>
                </div>
              </div>
            </div>
            <div className="button-close" onClick={toggleModal}>
              <button className="button">&times;</button>
            </div>
          </div>
          {/* <div className="text-center margin-bottom">
            <button className="button cta-reversed color-cta">PREVIOUS PAGE</button>
          </div> */}
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
