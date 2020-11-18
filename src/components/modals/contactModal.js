import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ContactModal = (props) => {
    const { image, name, charge, description, openModal, toggleModal } = props;
    let modalClass;
    let background;
    let color;

    if (!openModal) {
        modalClass = "modal"
    }
    else {
        modalClass = "modal open"
    }

    if (charge === "CEO") {
        color = "color-primary";
        background = "bg-soft"
    }
    else if (charge === "CTO") {
        color = "color-cta";
        background = "bg-cta"
    }
    else if (charge === "CMO") {
        color = "color-primary";
        background = "bg-primary"
    }

    return (
        <div className={modalClass}>
            <div className="modal-content contact-modal">
                <div className={`${background} flex relative end column`}>
                    <div className="contact-image">
                        <Img fixed={image} />
                    </div>
                    <h3 className="margin-left text-reversed text-center">{name}</h3>
                    <button class="button button-menu pointer" id="go-back" onClick={toggleModal}>
                        <i className="forward-arrow"></i>
                    </button>
                </div>
                <div className="h-70 flex column between">
                    <div className="contact-info">
                        <p className={`text-center ${color}`}>{charge} and Founder</p>
                        <div className="margin-top margin-bottom ">
                            <p className="">{description}</p>
                        </div>
                    </div>
                    <div className="padding-bottom">
                        <p className={`padding text-center ${color}`}>Contact Info</p>
                        <div className="padding flex evenly">
                            <Link to="facebook.com">
                                <i className="social-icon facebook-icon"></i>
                            </Link>
                            <Link to="instagram.com">
                                <i className="social-icon instagram-icon"></i>
                            </Link>
                            <Link to="gmail.com">
                                <i className="social-icon email-icon"></i>
                            </Link>
                            <Link to="linkedin.com">
                                <i className="social-icon linkedin-icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;