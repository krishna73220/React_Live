 
import React from "react";
const TestimonialContectUs = () => {
    return (
        <>
          <section className="testimonial_bg contact_us">
  <div className="container">
    <div className="section-title pt-5 pb-5">
      <h2>Let’s get started.</h2>
      <p>Say yes to online activities, online businesses and online growth!</p>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div
          className="career_with_dg text-center"
          data-aos="fade-right"
          data-aos-offset={200}
        >
          <img
            src="digital-marketing-company/contact-us.webp"
            className="img-fluid img-thumbnail"
            alt="Performance Marketing Agency in india"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="connect-with-dg">
          <form
            className="contact-us-form-bg mr-15"
            action="./assets/formphp/contact-us.php"
            method="post"
          >
            <h2>Send us a message</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="your-name"
                    placeholder="Enter Your Name"
                    required=""
                    onkeypress="return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="your-email"
                    placeholder="Your E-mail"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="your-phone-number"
                    placeholder="Phone Number"
                    required=""
                    maxLength={10}
                    oninput="this.value = this.value.replace(/[^0-9+()]/g, '');"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="purpose-of-enquiry"
                    placeholder="Purpose of Enquiry"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <textarea
                  name="your-message"
                  className="form-control"
                  cols={20}
                  rows={6}
                  placeholder="Write your message"
                  defaultValue={""}
                />
              </div>
            </div>
            <button
              type="submit"
              value="Submit"
              className="btn btn-dark dg_btns_main btn-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* Faqs area started here */}
    <div className="faqss">
      <div className="row">
        <div className="col-md-6">
          <div className="section-title">
            <h2>How can we help you right now?</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section-title">
            <p>
              The world of digital marketing can be confusing. We've compiled
              answers to common questions we receive from clients.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bsb-faq-3 py-3 py-md-5 py-xl-8">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6">
          <div className="accordion accordion-flush" id="faqAccount">
            <div className="accordion-item bg-transparent border-top border-bottom py-3">
              <h2 className="accordion-header" id="faqAccountHeading1">
                <button
                  className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqAccountCollapse1"
                  aria-expanded="false"
                  aria-controls="faqAccountCollapse1"
                >
                  Why is digital marketing important for businesses?
                </button>
              </h2>
              <div
                id="faqAccountCollapse1"
                className="accordion-collapse collapse"
                aria-labelledby="faqAccountHeading1"
              >
                <div className="accordion-body">
                  <p>
                    Digital marketing enhances brand visibility, engages wider
                    audiences, boosts customer interaction, and drives sales,
                    vital for business growth and success.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-transparent border-bottom py-3">
              <h2 className="accordion-header" id="faqAccountHeading2">
                <button
                  className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqAccountCollapse2"
                  aria-expanded="false"
                  aria-controls="faqAccountCollapse2"
                >
                  How does SEO benefit your businesses?
                </button>
              </h2>
              <div
                id="faqAccountCollapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faqAccountHeading2"
              >
                <div className="accordion-body">
                  <p>
                    SEO benefits your businesses in many ways, it improves
                    online visibility, drives organic traffic, boosts
                    credibility, and enhances website ranking.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-transparent border-bottom py-3">
              <h2 className="accordion-header" id="faqAccountHeading3">
                <button
                  className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqAccountCollapse3"
                  aria-expanded="false"
                  aria-controls="faqAccountCollapse3"
                >
                  How to choose the right social media platforms for your
                  business?
                </button>
              </h2>
              <div
                id="faqAccountCollapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faqAccountHeading3"
              >
                <div className="accordion-body">
                  <p>
                    Consider your target audience, industry, and content type.
                    Choose platforms where your audience engages most for
                    effective business promotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="accordion accordion-flush" id="faqOrder">
            <div className="accordion-item bg-transparent border-top border-bottom py-3">
              <h2 className="accordion-header" id="faqOrderHeading1">
                <button
                  className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOrderCollapse1"
                  aria-expanded="false"
                  aria-controls="faqOrderCollapse1"
                >
                  What technologies do you specialise in for website and app
                  development?
                </button>
              </h2>
              <div
                id="faqOrderCollapse1"
                className="accordion-collapse collapse"
                aria-labelledby="faqOrderHeading1"
              >
                <div className="accordion-body">
                  <p>
                    HTML, CSS, JavaScript, Python, and different frameworks are
                    technologies that specialise in website and app development.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-transparent border-bottom py-3">
              <h2 className="accordion-header" id="faqOrderHeading2">
                <button
                  className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOrderCollapse2"
                  aria-expanded="false"
                  aria-controls="faqOrderCollapse2"
                >
                  What sets your PR services apart from others in the industry?
                </button>
              </h2>
              <div
                id="faqOrderCollapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faqOrderHeading2"
              >
                <div className="accordion-body">
                  <p>
                    Unique strategies, tailored campaigns, and a results-driven
                    approach distinguish your PR services, ensuring impactful
                    and effective brand communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-transparent border-bottom py-3">
              <h2 className="accordion-header" id="faqOrderHeading3">
                <button
                  className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqOrderCollapse3"
                  aria-expanded="false"
                  aria-controls="faqOrderCollapse3"
                >
                  How do we ensure the security of the software application we
                  develop?
                </button>
              </h2>
              <div
                id="faqOrderCollapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faqOrderHeading3"
              >
                <div className="accordion-body">
                  <p>
                    Implement secure coding practices, conduct regular audits,
                    use encryption, and keep software updated to ensure robust
                    security for applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Faqs area end here */}
  </div>
</section>
  
        </>
    );
};
export default TestimonialContectUs;
