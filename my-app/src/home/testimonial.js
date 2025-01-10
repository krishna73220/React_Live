import React from "react"
import { Link } from 'react-router-dom';
const Testimonial_home = () => {
    return (
        <>
            <section className="testimonial_bg pb-5">
                <div className="container">
                    <div className="customer-say pb-5">
                        <div className="text-center">
                            <h4 className="headings-testo">What our awesome customers say</h4>
                        </div>
                        <div className="testimon-subhead">
                            <p>
                                Real Talk, Real Results - Sharing the love and building the Trust!
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-md-4">
                            <div className="single-testimonial">
                                <div className="testimonial-icon-wrapper">
                                    <div className="testimonial-icon">
                                        <i aria-hidden="true" className="fas fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-feedss">
                                    “Your deep understanding of our industry and target audience has
                                    translated into remarkable engagement and conversions. Thank you for
                                    being the best in the business!”
                                </div>
                                <div className="star-rating-wrapper">
                                    <div
                                        className="star-rating"
                                        title="5/5"
                                        itemType="http://schema.org/Rating"
                                        itemScope=""
                                        itemProp="reviewRating"
                                    >
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <span itemProp="ratingValue" className="screen-reader-only">
                                            5/5
                                        </span>
                                    </div>
                                </div>
                                <div className="testimonial-container text-center">
                                    <h5 className="testimonial-author">
                                        - Mohammed Fakhroo &amp; Bros W.L.L
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single-testimonial">
                                <div className="testimonial-icon-wrapper">
                                    <div className="testimonial-icon">
                                        <i aria-hidden="true" className="fas fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-feedss">
                                    “Your team's proficiency in navigating the complexities of online
                                    marketing has been a truely efficient for our business. Thank you
                                    for being the experts we can keep coming back to. Highly recomended!
                                </div>
                                <div className="star-rating-wrapper">
                                    <div
                                        className="star-rating"
                                        title="5/5"
                                        itemType="http://schema.org/Rating"
                                        itemScope=""
                                        itemProp="reviewRating"
                                    >
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <span itemProp="ratingValue" className="screen-reader-only">
                                            5/5
                                        </span>
                                    </div>
                                </div>
                                <div className="testimonial-container text-center mb-3">
                                    <h5 className="testimonial-author">- Goal Educational Institute</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single-testimonial">
                                <div className="testimonial-icon-wrapper">
                                    <div className="testimonial-icon">
                                        <i aria-hidden="true" className="fas fa-quote-right" />
                                    </div>
                                </div>
                                <div className="testimonial-feedss">
                                    “Your strategic campaigns and data-driven approach have catapulted
                                    our brand to new heights. It's a pleasure to work with a team that
                                    truly understands the art and science of digital space.”
                                </div>
                                <div className="star-rating-wrapper">
                                    <div
                                        className="star-rating"
                                        title="5/5"
                                        itemType="http://schema.org/Rating"
                                        itemScope=""
                                        itemProp="reviewRating"
                                    >
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <i className="star-full">★</i>
                                        <span itemProp="ratingValue" className="screen-reader-only">
                                            5/5
                                        </span>
                                    </div>
                                </div>
                                <div className="testimonial-container text-center">
                                    <h5 className="testimonial-author">
                                        - GS Medical College &amp; Hospital
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* customer support area started here */}
                    <div className="customer_support pt-3 pb-5">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-6">
                                <div className="digital-advertis">
                                    <h2 className="advertis-headn">24/7 customer support service</h2>
                                    <p>
                                        Our dedicated and knowledgeable representatives are available
                                        around the clock to provide prompt and reliable support. Enjoy
                                        peace of mind knowing, we ensure that your needs are met at any
                                        hour, day or night. Our commitment to exceptional customer service
                                        is indeed you're looking for!
                                    </p>
                                    <div className="button-wrapper-digital">
                                        <Link className="button-digital button-xl" to='/contact-us'>
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
                            <div className="col-12 col-lg-6 col-md-6">
                                <div className="custom-image-widget text-center">
                                    <img
                                        src="digital-marketing-company/tanu-diksha.png"
                                        className="img-fluid"
                                        alt="top web development company in patna bihar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* customer support area end here */}
                    <div className="testimonial-background-overlay">
                        <div className="row justify-content-md-centers">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className="customer-support-wrap">
                                    <div className="customer-support-header animated fadeIn">
                                        <div className="customer-support-container">
                                            Ready for your digital success?
                                        </div>
                                    </div>
                                    <div
                                        className="customer-support-subheader animated fadeIn"
                                        data-animation-delay={100}
                                    >
                                        <div className="customer-support-container">
                                            Our Services to Boost Your Brand and Thrust Your Sales.
                                        </div>
                                    </div>
                                    <div className="customer-support-image-container d-flex">
                                        <div className="support-icon">
                                            <img
                                                src="digital-marketing-company/dg-img/Highlight_05.png"
                                                alt="digital marketing services"
                                            />
                                        </div>
                                        <div className="btn-center customer-support-container">
                                            <Link to='/contact-us' className="btn btn-dark dg_btns_main btn-md">
                                                {" "}
                                                Get started
                                            </Link>
                                        </div>
                                        <div className="support-icons">
                                            <img
                                                className="rotated-image"
                                                src="digital-marketing-company/dg-img/Highlight_05.png"
                                                alt="website development"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* digital success area end here */}
                </div>
            </section>

        </>
    )
}

export default Testimonial_home;