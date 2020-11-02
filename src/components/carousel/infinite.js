import React, { useReducer } from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import '../../styles/carousel.scss'

function CarouselInfinite(props) {
    const { items } = props;

    const [trackState, setTrackState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        trackIndex: 0,
        selectedTrack: items[0]
    });

    let itemClass = 'container';

    const currentSlide = (index) => {
        setTrackState({
            trackIndex: index,
            selectedTrack: items[index]
        });
    };

    return (
        <div className="carousel">
            <div className="track">
                {items.map((item, index) => {
                    const specialStyles = {};
                    let titleClass = item.style ? "color-secondary inline-block" : "color-primary inline-block";

                    if (index === trackState.selectedTrack.index) {
                        specialStyles.display = 'block';
                        itemClass += ' fade'
                    }
                    else {
                        specialStyles.display = 'none';
                    }

                    return (
                        <div className={itemClass} key={index} style={specialStyles}>
                            <BackgroundImage className="imagen flex column end" tag="div" fluid={item.image}>
                                <h2 className="text-reversed padding">WHAT WE DO</h2>
                            </BackgroundImage>
                            <div className="margin-top content">
                                <div>
                                    <div className="item-heading flex align-center">
                                        <Img fixed={item.icon} />
                                        <h4 className={titleClass}>{item.title}</h4>
                                    </div>
                                    <div className="item-content">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="item-cta text-center margin-bottom">
                <Link to="#" className="button cta">SEE OFFERS</Link>
            </div>
            <div className="indicators text-center">
                {items.map((item, index) => {
                    let dotClasses = 'dot';

                    if (index === trackState.selectedTrack.index) {
                        dotClasses += ' active';
                    }
                    return (
                        <div className={dotClasses} onClick={() => currentSlide(index)} key={index}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default CarouselInfinite;