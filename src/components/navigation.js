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

    const toggleMenu = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true)
    }

    useEffect(() => {
        openMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [openMenu])

    return (
        <section className="navbar-section">
            <div className="hide-desktop toggle-menu">
                <button className="button button-menu" onClick={toggleMenu}>
                    <i className="menu-icon"></i>
                </button>
            </div>
            <div className="flex between align-center w-1">
                <Link to="/" className="logo">
                    <Img fixed={data.logoMobile.childImageSharp.fixed} />
                </Link>
            </div>
            <Menu openMenu={openMenu} />
        </section>
    )
}

export default Navigation;