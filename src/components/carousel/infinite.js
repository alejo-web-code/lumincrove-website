import React, { useReducer, useState, useRef } from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import '../../styles/carousel.scss'

function CarouselInfinite(props) {
    const { items } = props;
    const trackRef = useRef(null);
    const [trackState, setTrackState] = useReducer((state, newState) => ({ ...state, ...newState }), {
        prevIndex: 5,
        trackIndex: 0,
        selectedTrack: items[0],
        direction: 0
    });

    let itemClass = 'container';

    const slideRight = (index) => {
        if (trackState.direction === -1) {
            trackRef.current.className = "track flex start"
        }
        trackRef.current.style.transform = 'translateX(-375px)';
        let indexBefore = trackState.trackIndex;

        if (trackState.prevIndex === 5) {
            setTrackState({
                prevIndex: 0,
                trackIndex: index,
                selectedTrack: items[index],
                direction: 1
            });
        }
        else {
            setTrackState({
                prevIndex: indexBefore,
                trackIndex: index,
                selectedTrack: items[index],
                direction: 1
            });
        }
    }

    const slideLeft = (index) => {
        if (trackState.direction === 1) {
            trackRef.current.className = "track flex end"
        }
        trackRef.current.style.transform = 'translateX(375px)'
        let indexBefore = trackState.trackIndex;

        setTrackState({
            prevIndex: indexBefore,
            trackIndex: index,
            selectedTrack: items[index],
            direction: -1
        });

    }

    const endTranslate = (e) => {
        let track = e.target;

        track.style.transition = 'none';
        track.style['-webkit-transform'] = 'translate(0)';
        setTimeout(() => {
            track.style.transition = 'all 0.5s';
        });
        setTrackState({
            prevIndex: 5
        });
    }

    const currentSlide = (index) => {
        if (index < trackState.trackIndex) {
            slideLeft(index)
        }
        else if (index > trackState.trackIndex) {
            slideRight(index)
        }
    };

    return (
        <div className="carousel">
            <div className="track flex start" ref={trackRef} onTransitionEnd={endTranslate}>
                {items.map((item, index) => {
                    const specialStyles = {};
                    let titleClass = item.style ? "color-secondary inline-block" : "color-primary inline-block";

                    if (index === trackState.trackIndex) {
                        itemClass += ' active'
                    }
                    else {
                        itemClass = 'container';
                    }

                    if (trackState.prevIndex !== 5 && index === trackState.prevIndex) {
                        itemClass += ' active'
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