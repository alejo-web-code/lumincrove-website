import React, { useState, useEffect } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from 'gatsby-image';
import Menu from './menu'
import '../styles/navigation.scss'

function Navigation() {
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
    let [openSubMenu, setOpenSubMenu] = useState(false);

    let subMenuClass = openSubMenu ? 'submenu padding' : 'submenu close padding';

    const toggleMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    const openServices = () => {
        setOpenSubMenu(true);
    }

    const closeServices = () => {
        setOpenSubMenu(false);
    }

    useEffect(() => {
        openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [openMenu])

    return (
        <section className="navbar-section reponsive flex">
            <div className="hide-desktop toggle-menu">
                <button className="button button-menu" onClick={toggleMenu}>
                    <i className="menu-icon"></i>
                </button>
            </div>
            <div className="flex between align-center w-100">
                <Link to="/" className="logo">
                    <Img fixed={data.logoMobile.childImageSharp.fixed} />
                </Link>
                <nav className="hide-mobile padding-right">
                    <ul className="flex center margin-right">
                        <li className="menu-item relative">
                            <Link to="#" onMouseOver={openServices} onMouseLeave={closeServices} role="presentation">Our Services</Link>
                            <div className={subMenuClass} onMouseOver={openServices} onMouseLeave={closeServices} >
                                <ul className="text-left h-100">
                                    <li className="submenu-item padding-small">
                                        <Link to="#">Web Migration</Link>
                                    </li>
                                    <li className="submenu-item padding-small">
                                        <Link to="#">Web Design</Link>
                                    </li>
                                    <li className="submenu-item padding-small">
                                        <Link to="#">System Operation</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-item">
                            <Link to="/terms-of-use">Terms Of Use</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Menu openMenu={openMenu} />
        </section>
    )
}

export default Navigation;