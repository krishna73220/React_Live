
import React from "react";
import Counter from "../component/counter";
import { Link } from 'react-router-dom';
const TestimonialPrservice = () => {
  return (
    <>
      <section className="testimonial_bg contact_us">
        <div className="container">
          <div className="row pt-md-5">
            <div className="col-lg-6 col-md-6">
              <div className="about-agency performance-marketings">
                <div className="about-wrap">
                  <img
                    src="digital-marketing-company/pr-service.webp"
                    className="img-fluid"
                    alt="public relations strategies"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pl-5">
              <div className="about-agency perform pt-md-4 mt-3">
                <div className="breadcrumb-text about-dg-title">
                  <span>DG digital</span>
                  <h3>
                    Public Yet Personalized.
                    <br /> Unnew the Now!
                  </h3>
                </div>
                <div className="expert-sub-titles">
                  <p>
                    We induce positive change and foster strong connections through
                    compelling story ideas to public with a personalized approach.
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
          <Counter />
          {/* clients value area started */}
          <div className="clients-value boosting-busines pt-md-5">
            <div className="section-title pt-md-3 pb-5">
              <h2>Butter the Bitter to get Better</h2>
              <p>
                Working over the bitter experiences with custome- buttered PR
                Strategies to experience the better.
              </p>
            </div>
            <div className="row">
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
                        From Trends to Legends - Build Brand Connections
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
                      <h5 className="influenc">
                        Boost Your Brand's Visibility with Effective Media Relations
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
                        src="assets/svg/target.png"
                        alt="crm development company"
                        className="img-fluid media-icon"
                      />
                    </div>
                    <div className="ideas-influence-widget clints-widget">
                      <h5 className="influenc">
                        Connecting, Engaging, and Amplifying Your Messages
                      </h5>
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
export default TestimonialPrservice;
