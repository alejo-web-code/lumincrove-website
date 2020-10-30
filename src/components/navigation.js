import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import Menu from './menu'
import '../styles/navigation.scss'

function Navigation() {
    const [divShow, setDivShow] = useState(false);

    let divClass;

    if (!divShow) {
        divClass = "nav-over-hide"
    }
    else {
        divClass = "nav-over-hide show"
    }
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
            logoMobile: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
					fixed(width: 180) {
						...GatsbyImageSharpFixed
					}
				}
            }
        }   
    `)

    let [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    const showDiv = () => {
        setDivShow(true)
    }

    const hideDiv = () => {
        setDivShow(false)
    }

    return (
        <section className="navbar-section relative">
            <div className="hide-desktop toggle-menu">
                <button className="button" onClick={toggleMenu}>
                    <i className="menu-icon"></i>
                </button>
            </div>
            <div className="flex between align-center w-1 padding-r-l">
                <Link to="/" className="logo">
                    <Img fixed={data.logoMobile.childImageSharp.fixed} />
                </Link>
                <div className="hide-mobile">
                    <ul className="flex center">
                        <li className="padding-right relative" onMouseOver={showDiv}>
                            <span >Our Services</span>
                            <div className={divClass} onMouseLeave={hideDiv}>
                                <ul className="text-center">
                                    <li>
                                        <Link to="#">Service 1</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Service 2</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Service 3</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="padding-right">
                            <Link to="#">Terms Of Use</Link>
                        </li>
                        <li className="padding-right">
                            <Link to="#">Privaci Policy</Link>
                        </li>
                        <li>
                            <Link to="#">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Menu openMenu={openMenu} />
        </section>
    )
}

export default Navigation;