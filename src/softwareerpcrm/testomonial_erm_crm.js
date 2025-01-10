 
import React from "react";
import Counter from "../component/counter";
import { Link } from 'react-router-dom';
const TestimonialErmCrm = () => {
    return (
        <>
            <section className="testimonial_bg contact_us">
  <div className="container">
    <div className="row pt-md-5">
      <div className="col-lg-6 col-md-6">
        <div className="about-agency performance-marketings">
          <div className="about-wrap">
            <img
              src="digital-marketing-company/Software-ERP-CRM.webp"
              className="img-fluid"
              alt="small software development company"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 pl-5">
        <div className="about-agency perform pt-md-4 mt-3">
          <div className="breadcrumb-text about-dg-title">
            <span>DG digital</span>
            <h3>Revolutionise Your Response To Your Relationships</h3>
          </div>
          <div className="expert-sub-titles">
            <p>
              With a focus on innovation and efficiency, we create tailor-made
              software solutions that cater to your specific requirements.
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
        <h2>Drive the Growth while Delivering Experiences</h2>
        <p>
          Optimize Operations, Enhance Efficiency, and facilitate Data-driven
          Decision-making. Experience the Power!
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
                  Empowering Businesses with Customized ERP Solutions
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
                  Transform to AI- Powered CRM with cutting edge <br />{" "}
                  solutions
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
                  {" "}
                  Empowering Growth, Amplifying Impact with Innovative Software
                  Solutions
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
export default TestimonialErmCrm;
