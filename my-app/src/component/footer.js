import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <section className="footer_wrapper mt-md-0 pb-0 testimonial_bg">
                    <div className="container pb-3">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h5>DG DIGITAL</h5>
                                <p className="ps-0">
                                    Transform your brand with our digital magic! Expert in organic
                                    content, branding, lead generation and CGI ads. Let’s create your
                                    digital success story!.....
                                </p>
                                <div className="contact-info">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://wa.me/917368083688" target="_blank">
                                                <i className="fa fa-whatsapp me-3 text-center" /> +91 736 808
                                                3688
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+917368083688">
                                                <i className="fa fa-phone me-3" />
                                                +91 736 808 3688
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:contact@dgdigital.in">
                                                <i className="fa fa-envelope me-3" />
                                                contact@dgdigital.in
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>Useful Links</h5>
                                <ul className="link-widget p-0">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/about-us'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/our-team'>Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact-us'>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/blog'>Our Blog</Link>
                                    </li>
                                    <li>
                                        <Link to='/careers'>Careers With Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>Quick Links</h5>
                                <ul className="link-widget p-0">
                                    <li>
                                        <Link to='/prservices'>PR Services</Link>
                                    </li>
                                    <li>
                                        <Link to='/digitalmarketing'>Digital Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to='/performanceMarketing'>Performance Marketing</Link>
                                    </li>
                                    <li>
                                        <Link to='/search-engine-optimization'>
                                            Search Engine Optimization
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/webappdevelopment'>Website and App Development</Link>
                                    </li>
                                    <li>
                                        <Link to='softwareerpcrm'>Software/ERP/CRM Development</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5>Newsletter</h5>
                                <div className="form-group mb-4">
                                    <input
                                        type="email"
                                        className="form-control bg-transparent"
                                        placeholder="enter your email here"
                                    />
                                    <button
                                        type="submit"
                                        className="main-btn rounded-2 mt-3 border-white text-white"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <h5>Stay Connected</h5>
                                <ul className="social-network d-flex align-items-center p-0">
                                    <li>
                                        <a href="https://www.facebook.com/DGDigitalTM" target="_blank">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/DgDigitaltm" target="_blank">
                                            <i className="fab fa-x-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/devout-growth-digital"
                                            target="_blank"
                                        >
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/dgdigitaltm" target="_blank">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid copyright-section">
                        <p>
                            Copyright © 2024 <Link to='/'>DG digital</Link> All Rights Reserved
                        </p>
                    </div>
                </section>
            </footer>

            <>
                {/* Scroll to Top Button */}
                <a  className="scroll-up" id="scrollUpBtn">
                    <i className="fas fa-arrow-up" /> {/* You can use an icon or text */}
                </a>
            </>

        </>
    )
}

export default Footer;