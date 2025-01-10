
import React from "react";
import { Link } from 'react-router-dom';
const ExpertSolutions = () => {
    return (
        <>
            <section className="expert-solutions expert-agency">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="dg_business_challange">
                                <h2 className="expert-solutions-title">
                                    {" "}
                                    Business Challanges Meets Expert Solutions
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="expert-sub-titles">
                                <p>
                                    {" "}
                                    Our team has a successful track record of helping brands scale
                                    profitably based on high-performing strategies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="expert-solutions-ideas">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/megaphone.png"
                                                alt="Ideas to Influence"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget">
                                            <h5 className="influenc">Ideas to Influence</h5>
                                            <p>Visionary Ideas that transforms a business into a brand.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media visibility-corner">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/network.png"
                                                alt="Visibility"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget">
                                            <h5 className="influenc">Visibility to Credibility</h5>
                                            <p>
                                                From being visible to become credible, we have a roadmap for
                                                your brand to be talked about.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="dg-paid-media impact-dg">
                                    <div className="ideas_corner">
                                        <div className="paid-media-icon">
                                            <img
                                                src="assets/svg/mail-box.png"
                                                alt="Amplifying Impact"
                                                className="img-fluid media-icon"
                                            />
                                        </div>
                                        <div className="ideas-influence-widget">
                                            <h5 className="influenc">Amplifying Impact</h5>
                                            <p>
                                                Amplification of impacts through strategic &amp; illuminating
                                                actions that resonates with purpose to be solved.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dg-background-overlay mb-2" />
                            <div
                                className="col-lg-12 col-md-12 col-12 mb-2 mt-5 d-flex justify-content-center"
                                data-aos="fade-right"
                                data-aos-offset={200}
                            >
                                <Link to='/contact-us'>
                                    <img
                                        src="digital-marketing-company/services/if-why-not-you.webp"
                                        className="img-fluid"
                                        alt="best online marketing agency in india"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Why you need digital advertising area started here */}
                    <div className="digital_advertising mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="custom-image-widget text-center">
                                    <img
                                        src="digital-marketing-company/arti-digital.png"
                                        className="img-fluid"
                                        alt="best online marketing agency in india"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="digital-advertis mt-md-4 mb-2">
                                    <h2 className="advertis-headn">
                                        Why you need digital advertising?
                                    </h2>
                                    <p>
                                        In order to scale customer acquisition, we are a proven expertise
                                        of digital marketing services.
                                    </p>
                                    <div className="button-wrapper-digital">
                                        <Link className="button-digital button-xl" to='/blog'>
                                            <span className="button-content">
                                                <span className="button-text">Learn more</span>
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
                    {/* Why you need digital advertising area end here */}
                </div>
            </section>
        </>
    )
}

export default ExpertSolutions;