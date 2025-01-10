 
import React from "react";
import { Link } from 'react-router-dom';

import Counter from "../component/counter";
const TestimonialAbout= () => {
    return (
        <>
            <section className="testimonial_bg contact_us about_our_agency">
  <div className="container">
    <div className="row pt-md-5">
      <div className="col-lg-6 col-md-6">
        <div className="about-agency">
          <div className="breadcrumb-text about-dg-title">
            <span>LITTLE MORE BRIEF</span>
            <h3>About Us</h3>
          </div>
          <div className="about-wrap">
            <img
              src="digital-marketing-company/about-us.jpg"
              className="img-fluid"
              alt="best SEO services provider"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 pl-5">
        <div className="about-agency">
          <div className="expert-sub-titles">
            <p>
              For more than 6 remarkable years, we have stood at the forefront
              of the digital marketing realm, imprinting an enduring mark on the
              expansive landscape of the industry. We have become the
              quintessence of excellence in the digital realm. Our forte lies in
              Search Engine Optimization (SEO) and Social Media Marketing (SMM),
              where we have honed our skills to orchestrate impeccable organic
              lead generation.
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
          <div className="about-wrap pt-md-5">
            <img
              src="digital-marketing-company/about-digital-marketing-company.webp"
              className="img-fluid"
              alt="social media marketing agency"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Here counter area started */}
       <Counter/>
    {/* clients value area started */}
    <div className="clients-value pt-md-5">
      <div className="section-title pt-3 pb-md-5">
        <h2>What clients value most about us</h2>
        <p>
          Clients value our deep understanding of DM strategies tailored with
          creativity and innovation for tangible results.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results text-center">
            <div className="ideas_corner">
              <div className="paid-media-icon">
                <img
                  src="assets/svg/transparency.png"
                  alt="Transparency"
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc">Transparency</h5>
                <p>
                  Step into our Transparency Playground! We're all about keeping
                  everything simple and transparent.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results text-center">
            <div className="ideas_corner">
              <div className="paid-media-icon">
                <img
                  src="assets/svg/group.png"
                  alt="Experienced team"
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc">Experienced team</h5>
                <p>
                  Folks who make digital magic happen - A blend of digital
                  wizards, creative maestros and strategic virtuosos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results text-center">
            <div className="ideas_corner">
              <div className="paid-media-icon">
                <img
                  src="assets/svg/rankings.png"
                  alt="Result guaranteed"
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc">Result guaranteed</h5>
                <p>
                  Results that pop thro’ campaigns from turbo - charged website
                  traffic to jaw dropping conversions.
                </p>
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
export default TestimonialAbout;
