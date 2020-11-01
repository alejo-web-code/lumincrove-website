import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import '../../styles/carousel.scss'

function CarouselInfinite(props) {
    const { images } = props;
    return (
        <div className="carousel">
            <div className="track">
                <div className="container">
                    <BackgroundImage className="imagen flex column end" tag="div" fluid={images}>
                        <h2 className="text-reversed padding">WHAT WE DO</h2>
                    </BackgroundImage>
                    <div className="margin-top content">
                        <div>
                            <div className="item-heading">
                                <img src="/assets/graph-icon.png" />
                                <h4 className="color-primary inline-block">Do you want your business to be at the top?</h4>
                            </div>
                            <div className="item-content">
                                <p>Our mission is to make your ideas come to life, we make sure to focus on what matters most to you. Allow us to build your website using the most current features and trends in the digital world.</p>
                            </div>
                        </div>
                        <div className="item-cta text-center margin-bottom">
                            <Link to="#" className="button cta">SEE OFFERS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="indicators text-center">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default CarouselInfinite;