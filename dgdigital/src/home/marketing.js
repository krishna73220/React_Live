import React from "react"
import { Link } from 'react-router-dom';
import { useState ,useEffect } from "react";

const Marketing_area = () => {
    const [projectsCount, setProjectsCount] = useState(0);
    const [roasPercentage, setRoasPercentage] = useState(0);

    useEffect(() => {
        const projectsTarget = 150;
        const roasTarget = 75;
        const interval = 100; // milliseconds

        const projectsIncrement = Math.ceil(projectsTarget / 150); // Adjust increment for projects
        const roasIncrement = Math.ceil(roasTarget / 75); // Adjust increment for ROAS

        const projectsInterval = setInterval(() => {
            setProjectsCount((prev) => {
                if (prev < projectsTarget) {
                    return Math.min(prev + projectsIncrement, projectsTarget);
                }
                clearInterval(projectsInterval);
                return prev;
            });
        }, interval);

        const roasInterval = setInterval(() => {
            setRoasPercentage((prev) => {
                if (prev < roasTarget) {
                    return Math.min(prev + roasIncrement, roasTarget);
                }
                clearInterval(roasInterval);
                return prev;
            });
        }, interval);

        return () => {
            clearInterval(projectsInterval);
            clearInterval(roasInterval);
        };
    }, []);

    return (
        <>
            <section className="marketing_area">
                <div className="container">
                    <div className="dg_marketing_effective">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="image-widget">
                                    <div className="image-container">
                                        <img
                                            width={160}
                                            height={160}
                                            src="assets/svg/Misc.png"
                                            className="responsive-image"
                                            alt="Best digital marketing agency near me"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="marketing-column">
                                    <div className="marketing-widget-wrap">
                                        <div className="marketing-heading-wrapper">
                                            <div className="marketing-heading-container">
                                                <h2 className="marketing-heading-title">
                                                    Make your marketing more effective
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="marketing-text-wrapper">
                                            <div className="marketing-text-container">
                                                Making brands to attract and keep new customers by
                                                implementing comprehensive solutions that treads in customer
                                                experience.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    {/* dg marketing content area started here */}
                    <div className="marketing_automatin">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="automate">
                                    <div className="automate-widget-text">
                                        <h5 className="automate-widget-headn"> Marketing Automation</h5>
                                    </div>
                                    <div className="automate-widget-description">
                                        <p className="automate-content">
                                            {" "}
                                            Our team has a successful track record of helping brands.
                                        </p>
                                    </div>
                                    <div className="automate-widget-button">
                                        <div className="custom-widget-content">
                                            <div className="custom-button-wrapper">
                                                <Link
                                                    className="automate-button"
                                                    to='/performanceMarketing'
                                                >
                                                    <span className="automate-button-content">
                                                        <span className="automate-button-text">Learn more</span>
                                                        <span className="automate-button-icon">
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
                                    <div className="automate-widget-image">
                                        <img
                                            width={1024}
                                            height={724}
                                            src="digital-marketing-company/Marketing-Automation.webp"
                                            className="automate-image img-fluid"
                                            alt="digital-marketing-company"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="conent-markting">
                                    <div className="conent-markting-part">
                                        <div className="automate-widget-text">
                                            <h5 className="automate-widget-headn"> Content Marketing</h5>
                                        </div>
                                        <div className="conent-markting-description">
                                            <p>
                                                Our team has a successful track record of strategically
                                                creating and distributing valuable and consistent content to
                                                make an appeal to relevant and target audience for every brand
                                                we worked for.
                                            </p>
                                        </div>
                                        <div className="automate-widget-button">
                                            <div className="custom-widget-content">
                                                <div className="custom-button-wrapper">
                                                    <Link
                                                        className="automate-button"
                                                        to='/digitalmarketing'
                                                    >
                                                        <span className="automate-button-content">
                                                            <span className="automate-button-text">Learn more</span>
                                                            <span className="automate-button-icon">
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
                                        <div className="automate-widget-image">
                                            <img
                                                src="digital-marketing-company/Content-Marketing.jpg"
                                                className="automate-image img-fluid"
                                                alt="digital-marketing-company"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12 pt-5 pb-5">
                                <div
                                    className="media-marketing"
                                    data-aos="fade-up-left"
                                    data-aos-offset={150}
                                >
                                    <div className="conent-markting-part">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="automate-widget-text">
                                                    <h5 className="automate-widget-headn">
                                                        Social Media Marketing
                                                    </h5>
                                                </div>
                                                <div className="conent-markting-description">
                                                    <p>
                                                        Social Media is all about Experience Marketing thus
                                                        educating the audience about the Brand. We focus on
                                                        building the Brands through public endorsements.
                                                    </p>
                                                </div>
                                                <div className="button-wrapper-digital">
                                                    <Link
                                                        className="button-digital button-xl"
                                                        to='/contact-us'
                                                    >
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
                                            <div className="col-lg-6 col-md-6">
                                                <div className="marketing-widget-image">
                                                    <img
                                                        src="digital-marketing-company/media-marketings.png"
                                                        className="automate-image img-fluid"
                                                        alt="digital-marketing-company"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Growth drives area started here */}
                    <div className="pt-5 pb-5 mb-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="custom-image-widget text-center">
                                    <img
                                        src="digital-marketing-company/vikram.png"
                                        className="img-fluid"
                                        alt="Digital marketing services"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="pt-5 dg-media-drives">
                                    <div className="dtal-growth-drive pt-5">
                                        <h3 className="growth-drive">Growth drives everything we do</h3>
                                        <p>
                                            We strategically engage throughout the absoluteness of the
                                            branding journey.
                                        </p>
                                    </div>
                                    <div className="growth-count">
                                    <div className="row">
            <div className="col-md-6">
                <div className="container_counter">
                    <h2 className="heading counter">{projectsCount}+</h2>
                    <p className="description">Advertising Collaborators</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="container_counter">
                    <h2 className="heading counter">{roasPercentage}%</h2>
                    <p className="description">Increase in ROAS</p>
                </div>
            </div>
        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Growth drives area end here */}
                </div>
            </section>
        </>
    )
}
export default Marketing_area