import React from "react";
import { Link } from "gatsby";
import '../styles/footer.scss';

const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="site-footer">
                <div className="text-center">
                    <h2 className="text-reversed padding">DO YOU HAVE A PROJECT IN MIND?</h2>
                </div>
                <div className="flex responsive footer-container around">
                    <div className="w-50 padding">
                        <form className="w-100 flex responsive contact-form">
                            <label className="input-container w-50 margin-bottom-small">
                                <span className="block text-reversed label">Full Name *</span>
                                <input className="input" type="text" name="userName" value="" placeholder="Enter your name" />
                            </label>
                            <label className="input-container w-50 margin-bottom-small">
                                <span for="name" className="block text-reversed label">Email *</span>
                                <input className="input" type="email" value="" placeholder="Enter your email" name="email" />
                            </label>
                            <label className="input-container w-50 margin-bottom-small">
                                <span for="name" className="block text-reversed label">Company</span>
                                <input className="input" type="text" value="" placeholder="Your company" name="company" />
                            </label>
                            <label className="input-container w-50 margin-bottom">
                                <span for="name" className="block text-reversed label">Comments/ Questions *</span>
                                <textarea className="textarea" value="" placeholder="Let your comment" name="comments" />
                            </label>
                            <div className="text-center margin-bottom w-100">
                                <button className="button cta">GET STARTED</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-33">
                        <div className="w-100 padding flex evenly">
                            <Link to="facebook.com">
                                <i className="social-icon facebook-icon-reversed"></i>
                            </Link>
                            <Link to="instagram.com">
                                <i className="social-icon instagram-icon-reversed"></i>
                            </Link>
                            <Link to="gmail.com">
                                <i className="social-icon email-icon-reversed"></i>
                            </Link>
                            <Link to="linkedin.com">
                                <i className="social-icon linkedin-icon-reversed"></i>
                            </Link>
                        </div>
                        <div className="w-100 flex evenly padding">
                            <div className="text-left">
                                <Link to="#" className="text-reversed block footer-link">Terms of Use</Link>
                                <Link to="/privacy-policy" className="text-reversed block footer-link">Privacy Polcy</Link>
                                <Link to="#" className="text-reversed block footer-link">Blog</Link>
                                <Link to="#" className="text-reversed block footer-link">Contact Us</Link>
                            </div>
                            <div className="text-right">
                                <Link to="#" className="text-reversed block footer-link">Web Design</Link>
                                <Link to="#" className="text-reversed block footer-link">Web Migration</Link>
                                <Link to="#" className="text-reversed block footer-link">Sysytem Operation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;