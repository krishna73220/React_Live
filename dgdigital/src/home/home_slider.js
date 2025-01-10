import React from "react";
import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from "react-router-dom";


const Home_slider = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className="home-slider pb-0">
                <div className="digital-team-bg-line">
                    <div className="container">
                        <div className="banner-content">
                            <div className="click-main snipper-dg-arrow">
                                <h1 className="slider-click-heading text-center">
                                    <img
                                        src="digital-marketing-company/dg-img/Highlight_05.png"
                                        width={45}
                                        className="mb-5 slider-rotate-img"
                                        alt="top marketing in patna"
                                    />
                                    <span className="clicks">Clicks</span> to <br />
                                    Conversions
                                </h1>
                            </div>
                            <div className="ex-pertis">
                                <p>Your success Our expertise! </p>
                            </div>
                            <div className="text-center btn-center">
                                <a
                                    href="https://wa.me/917368083688"
                                    target="_blank"
                                    className="btn btn-dark dg_btns_main btn-md"
                                >

                                    Get started
                                </a>
                            </div>
                        </div>
                        <div className="digital_team">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-4 col-sm-2">
                                    <div className="digital-team-area marketing-agena">
                                        <img
                                            src="digital-marketing-company/team/riya.jpg"
                                            title="digital marketing agency"
                                            alt="digital marketing agency"
                                            className="img-fluid"
                                            width={749}
                                            height={818}
                                            sizes="(max-width: 749px) 100vw, 749px"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-4 col-4"
                                    data-aos="flip-left"
                                    data-aos-offset={100}
                                >
                                    <div className="digital-team-area marketing-agenb">
                                        <img
                                            src="digital-marketing-company/team/prakss.jpg"
                                            title="digital marketing agency"
                                            alt="digital marketing agency"
                                            className="img-fluid"
                                            width={749}
                                            height={818}
                                            sizes="(max-width: 749px) 100vw, 749px"
                                        />
                                    </div>
                                    <div className="round-circle">
                                        <img src="digital-marketing-company/dg-img/round-dg.webp" alt="digital marketing company" className="rotating-image" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4 col-sm-2">
                                    <div className="digital-team-area marketing-agena">
                                        <img
                                            src="digital-marketing-company/team/anurag-phone.jpg"
                                            title="digital marketing agency"
                                            alt="digital marketing agency"
                                            className="img-fluid"
                                            width={749}
                                            height={818}
                                            sizes="(max-width: 749px) 100vw, 749px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home_slider;