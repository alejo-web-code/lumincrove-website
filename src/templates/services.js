import { graphql } from 'gatsby';
import React, { useState, useRef } from 'react';
import Layout from '../components/layout';
import BackgroundImage from 'gatsby-background-image';
import Helmet from 'react-helmet';
import favicon from '../../static/assets/logo-mobile.png';
import '../styles/services.scss';

export default function Template({
    data    // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark, migrationPageImage, designPageImage } = data;
    const { frontmatter } = markdownRemark;
    const { title, description, thumbnail, headingTitle, subtitle, services } = frontmatter;
    let backgroundHeader;
    let standardRef = useRef(null);
    let premiumRef = useRef(null);
    let customRef = useRef(null);

    const [tabStyle, setTabStyle] = useState('premium');

    const selectedTab = (e) => {
        if (e.currentTarget.id === 'premium') {
            premiumRef.current.className = "offers-tabs selected";
            standardRef.current.className = "offers-tabs";
            customRef.current.className = "offers-tabs";
            setTabStyle('premium')
        }
        else if (e.currentTarget.id === 'standard') {
            premiumRef.current.className = "offers-tabs";
            standardRef.current.className = "offers-tabs selected";
            customRef.current.className = "offers-tabs";
            setTabStyle('standard')
        }
        else if (e.currentTarget.id === 'custom') {
            premiumRef.current.className = "offers-tabs";
            standardRef.current.className = "offers-tabs";
            customRef.current.className = "offers-tabs selected";
            setTabStyle('custom')
        }
    }

    const customizeService = (e) => {
        if (e.target.checked) {
            e.target.parentElement.className = "list-item-selectable available margin-bottom-tiny"
        }
        else {
            e.target.parentElement.className = "list-item-selectable margin-bottom-tiny"
        }
    }

    if (thumbnail === "design") {
        backgroundHeader = designPageImage.childImageSharp.fluid;
    }
    else if (thumbnail === "migration") {
        backgroundHeader = migrationPageImage.childImageSharp.fluid;
    }

    return (
        <Layout>
            <Helmet>
                <html lang="en-US" />
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
                <link rel="icon" type="imge/x-icon" href={favicon} />
            </Helmet>
            <BackgroundImage tag="section" fluid={backgroundHeader} className="service-header flex column">
                <h1 className="text-reversed text-semibold margin-left margin-bottom-tiny text-responsive-align">{headingTitle}</h1>
            </BackgroundImage>
            <section className="padding-default">
                <div className="margin-bottom-small">
                    <p>{subtitle}</p>
                </div>
                <div>
                    <div className="">
                        <div id="standard" ref={standardRef} className="offers-tabs" onClick={selectedTab}>
                            <span className="">Standard</span>
                        </div>
                        <div id="premium" ref={premiumRef} className="offers-tabs selected" onClick={selectedTab}>
                            <span className="">Premium</span>
                        </div>
                        <div id="custom" ref={customRef} className="offers-tabs" onClick={selectedTab}>
                            <span className="">Custom</span>
                        </div>
                    </div>
                    <div className="service-list padding">
                        {services.map((service, index) => {
                            return (
                                <div key={index}>
                                    <h4 className="service-list-heading text-bold">{service.title}</h4>
                                    <ul className="padding-top-small padding-bottom-small">
                                        {service.items.map((element, index2) => {
                                            let listItemClass = "list-items margin-bottom-tiny";
                                            let selectValue = '';

                                            if (tabStyle === "standard" && element.premium === false) {
                                                listItemClass += " available"
                                            }
                                            else if (tabStyle === "premium") {
                                                listItemClass += " available"
                                            }
                                            else if (tabStyle === "custom") {
                                                if (!element.premium) {
                                                    listItemClass += " available"
                                                }
                                                else {
                                                    listItemClass = "list-item-selectable margin-bottom-tiny"
                                                    selectValue = (
                                                        <input type="checkbox" className="input" onClick={customizeService} />
                                                    )
                                                }
                                            }

                                            if (index === 0 && index2 === 0) {
                                                listItemClass += " text-bold"
                                            }

                                            return (
                                                <li key={index2} className={listItemClass}>{selectValue}{element.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            frontmatter {
                title
                description
                thumbnail
                headingTitle
                subtitle
                services {
                    title
                    items {
                        name
                        value
                        premium
                    }
                }
            }
        }
        migrationPageImage: file(relativePath: { eq: "carousel-item-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        designPageImage: file(relativePath: { eq: "carousel-item-1.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
`;
