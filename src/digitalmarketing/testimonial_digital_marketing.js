
import React from "react";
import { Link } from 'react-router-dom';
import Counter from "../component/counter";
const TestimonialDigitalmarketing = () => {
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
            <h3>Mask Your Marketing Like A Maestro</h3>
          </div>
          <div className="expert-sub-titles">
            <p>
              Find a team of digital marketers you can rely on. Every day, we
              build trust through communication, transparency, and results. From
              Website to Social Media, we create a difference that tells a story
              for a growth - driven business.
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
    {/* Offer services area started here */}
    <div className="container-dg-offers dg-digital-marketing-icone position-relative">
      <div className="d-flex service-titles">
        <h2 className="text-black fs-1 fw-bold">
          What services do we <br /> offer?
        </h2>
      </div>
      <div className="owl-carousel offer-services owl-theme my-5">
        <div className="item">
          <div className="row">
            <div className="col-md-6">
              <img
                src="digital-marketing-company/services/smm.webp"
                className="img-fluid"
                alt="SMM"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-4">
              <h4>SMM</h4>
              <p>
                Leave the hashtag hustle to us and watch your social media soar.
              </p>
              <a  className="digital-marketing-discover service-btn">
                Discover more
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-md-6">
              <img
                src="digital-marketing-company/services/smm.webp"
                className="img-fluid"
                alt="Content marketing"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-4">
              <h4>Content marketing</h4>
              <p>
                We Craft compelling narratives that captivate your audience and
                linger in their minds.
              </p>
              <a  className="digital-marketing-discover service-btn">
                Discover more
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-md-6">
              <img
                src="digital-marketing-company/services/digital-product.webp"
                className="img-fluid"
                alt="Digital product"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-4">
              <h4>Digital product</h4>
              <p>
                Every day, we build trust through communication, transparency,
                and results.
              </p>
              <a  className="digital-marketing-discover service-btn">
                Discover more
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row">
            <div className="col-md-6">
              <img
                src="digital-marketing-company/services/digital-product.webp"
                className="img-fluid"
                alt="Marketing strategy"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-4">
              <h4>Marketing strategy</h4>
              <p>
                That turn heads, sparkle conversations and build a community.
              </p>
              <a className="digital-marketing-discover service-btn">
                Discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* clients value area started */}
    <div className="clients-value boosting-busines pt-md-5 pb-md-5">
      <div className="section-title pt-md-3 pb-2">
        <h2>Digital strategy services</h2>
        <p>
          Frequent light on audits and assessment over the reached audience and
          continuous market research makes the best equation of brands to rule
          the market.
        </p>
      </div>
      <div className="row">
        <div className="col-md-2">
          <div className="digitl-strategy text-center">
            <img
              src="digital-marketing-company/services/Strategy-Creation.jpg"
              className="img-fluid"
              alt="Strategy creation"
            />
            <div className="name-degination pt-4">
              <h5>Strategy creation</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="digitl-strategy text-center">
            <img
              src="digital-marketing-company/services/E-Reputation-Management.jpg"
              className="img-fluid"
              alt="E-Reputation Management"
            />
            <div className="name-degination pt-4">
              <h5>E-Reputation Management</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="digitl-strategy text-center">
            <img
              src="digital-marketing-company/services/CampaignWork.jpg"
              className="img-fluid"
              alt="Campaign work"
            />
            <div className="name-degination pt-4">
              <h5>Campaign work</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="digitl-strategy text-center">
            <img
              src="digital-marketing-company/services/Engagement-&-Reach.jpg"
              className="img-fluid"
              alt="Engagement & Reach"
            />
            <div className="name-degination pt-4">
              <h5>Engagement &amp; Reach</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="digitl-strategy text-center">
            <img
              src="digital-marketing-company/services/Audit-&-Analysis.jpg"
              className="img-fluid"
              alt="Audit & Ananlysis"
            />
            <div className="name-degination pt-4">
              <h5>Audit &amp; Ananlysis</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="digitl-strategy text-center">
            <img
              src="digital-marketing-company/services/Crisis-Management.jpg"
              className="img-fluid"
              alt="Crisis Managemen"
            />
            <div className="name-degination pt-4">
              <h5>Crisis Management</h5>
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
export default TestimonialDigitalmarketing;
