import React from "react";
import Counter from "../component/counter";
import { Link } from 'react-router-dom';
const Testimonial_performance = () => {
    return (
        <>
            <section className="testimonial_bg contact_us">
                <div className="container">
                    <div className="row pt-md-5">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-agency performance-marketings">
                                <div className="about-wrap">
                                    <img
                                        src="digital-marketing-company/digital-marketing.webp"
                                        className="img-fluid"
                                        alt="affordable digital marketing services"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 pl-5">
                            <div className="about-agency perform pt-md-4 mt-3">
                                <div className="breadcrumb-text about-dg-title">
                                    <span>DG digital</span>
                                    <h3>From Performance Marketing to Market Dominance - Dive In!</h3>
                                </div>
                                <div className="expert-sub-titles">
                                    <p>
                                        Our performance marketing superheroes are standing by to bag your
                                        deals that scores great business. Say goodbye to old-school
                                        advertising and Bonjour to the future of marketing excellence!
                                    </p>
                                    <div className="button-wrapper-digital pt-md-4">
                                        <Link className="button-digital button-xl" to='/contact-us'>
                                            <span className="button-content">
                                                <span className="button-text">Contact Us</span>
                                                <span className="button-icon">
                                                    <i
                                                        aria-hidden="true"
                                                        className="fas fa-long-arrow-alt-right"
                                                    />
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Here counter area started */}
                  <Counter/>
                    {/* clients value area started */}
                    <div className="clients-value boosting-busines pt-md-5 pb-md-5">
                        <div className="section-title pt-md-3 pb-2">
                            <h2>Boosting your Business to Brand</h2>
                            <p>
                                Find a team of Performance marketers you can rely on. Every day, we
                                build trust through communication, transparency, and results.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media clints-results text-center">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/target.png"
                                                alt="affordable software development"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget clints-widget">
                                            <h5 className="influenc">
                                                Custom-Made Performance Marketing Campaigns
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media clints-results text-center">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/seo.png"
                                                alt="affordable software development company"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget clints-widget">
                                            <h5 className="influenc">
                                                Rockin' Conversion Rate Optimization (CRO)
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media clints-results text-center">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/digital-campaign.png"
                                                alt="crm development company"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget clints-widget">
                                            <h5 className="influenc">Geeky Data Wizards at Your Service</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media clints-results text-center">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/pay-per-click.png"
                                                alt="affordable software development"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget clints-widget">
                                            <h5 className="influenc">
                                                Channel Surfing? Nah, We Mastered It!
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media clints-results text-center">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/puzzle.png"
                                                alt="affordable software development company"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget clints-widget">
                                            <h5 className="influenc">Real-Time Party Dashboard</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media clints-results text-center">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/content-writing.png"
                                                alt="crm development company"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget clints-widget">
                                            <h5 className="influenc">Creative Content creation</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* clients value area end */}
                </div>
            </section>


        </>
    );
};

export default Testimonial_performance;
