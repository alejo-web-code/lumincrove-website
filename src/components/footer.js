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
                <div className="responsive">
                    <div className="w-4 padding">
                        <form className="w-1 flex column">
                            <div className="input-container margin-bottom-small">
                                <label for="name" className="block text-reversed label">Full Name *</label>
                                <input className="input" type="text" name="userName" value="" placeholder="Enter your name" />
                            </div>
                            <div className="input-container margin-bottom-small">
                                <label for="name" className="block text-reversed label">Email *</label>
                                <input className="input" type="email" value="" placeholder="Enter your email" name="email" />
                            </div>
                            <div className="input-container margin-bottom-small">
                                <label for="name" className="block text-reversed label">Company</label>
                                <input className="input" type="text" value="" placeholder="Your company" name="company" />
                            </div>
                            <div className="input-container margin-bottom-small">
                                <label for="name" className="block text-reversed label">Comments/ Questions *</label>
                                <textarea className="textarea" value="" placeholder="Let your comment" name="comments" />
                            </div>
                            <div className="text-center">
                                <button className="button cta">GET STARTED</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-4 padding flex evenly">
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
                    <div className="w-4 flex evenly padding">
                        <div className="text-left">
                            <Link to="#" className="text-reversed inline-block footer-link">Terms of Use</Link>
                            <Link to="#" className="text-reversed inline-block footer-link">Privacy Polcy</Link>
                            <Link to="#" className="text-reversed inline-block footer-link">Blog</Link>
                            <Link to="#" className="text-reversed inline-block footer-link">Contact Us</Link>
                        </div>
                        <div className="text-right">
                            <Link to="#" className="text-reversed inline-block footer-link">Web Design</Link>
                            <Link to="#" className="text-reversed inline-block footer-link">Web Migration</Link>
                            <Link to="#" className="text-reversed inline-block footer-link">Sysytem Operation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;