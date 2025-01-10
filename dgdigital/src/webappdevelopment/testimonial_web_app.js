 
import React from "react";
import { Link } from 'react-router-dom';
import Counter from "../component/counter";
const TestimonialInWebApp= () => {
    return (
        <>
            <section className="testimonial_bg contact_us">
  <div className="container">
    <div className="row pt-md-5">
      <div className="col-lg-6 col-md-6">
        <div className="about-agency performance-marketings">
          <div className="about-wrap">
            <img
              src="digital-marketing-company/web-development.webp"
              className="img-fluid"
              alt="creative web development agency"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 pl-5">
        <div className="about-agency perform pt-md-4 mt-3">
          <div className="breadcrumb-text about-dg-title">
            <span>DG digital</span>
            <h3>Ideation to Dominance in the Digital Arena.</h3>
          </div>
          <div className="expert-sub-titles">
            <p>
              We create websites or apps that reflect your brand identity and
              ensure seamless navigation for an enhanced user experience.
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
    <div className="clients-value boosting-busines pt-md-5">
      <div className="section-title pt-md-3 pb-5">
        <h2>What we do</h2>
        <p>
          From UI/UX to database integration, we create screen adaptive website
          or application.
        </p>
      </div>
      <div className="row web-aap-row">
        <div className="col-lg-8 col-md-8 web-aap-deve-bg">
          <div className="dg-paid-media clints-results fw-bold perfomace-bg position-relative py-5 my-5">
            <div className="ideas_corner">
              <div className="ideas-influence-widget clints-widget">
                <h2 className="fw-bold">
                  Save more and get visibility for your business.
                </h2>
                <button
                  type="submit"
                  className="main-btn rounded-2 mt-3 text-white"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results">
            <div className="ideas_corner">
              <div className="paid-media-icon m-0">
                <img
                  src="assets/svg/keywords.png"
                  width=""
                  alt="performance marketing agency"
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc my-2">Performance</h5>
                <p>
                  Partner with Our Experts to Create a Seamless User Experience
                  and Embrace the Mobile Advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results">
            <div className="ideas_corner">
              <div className="paid-media-icon m-0">
                <img
                  src="assets/svg/seo-content.png"
                  alt="performance marketing agency"
                  width={55}
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc my-2">
                  Web Wonder: Turning Imagination into Interactive Reality
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results ">
            <div className="ideas_corner">
              <div className="paid-media-icon m-0">
                <img
                  src="assets/svg/hourglass.png"
                  alt="Digital performance marketing agency"
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc my-2">
                  Redefining E-commerce Success: Empowering Your Unique Online
                  Store.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="dg-paid-media clints-results ">
            <div className="ideas_corner">
              <div className="paid-media-icon m-0">
                <img
                  src="assets/svg/perform.png"
                  alt="b2b performance marketing agency"
                  className="img-fluid media-icon"
                />
              </div>
              <div className="ideas-influence-widget clints-widget">
                <h5 className="influenc my-2">
                  App-tastic Creations: Crafting Innovative Mobile Experiences.
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
export default TestimonialInWebApp;
