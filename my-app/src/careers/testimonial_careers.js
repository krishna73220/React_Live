 
import React from "react";
const TestimonialCarrers = () => {
    return (
        <>
            <section className="testimonial_bg contact_us careers">
  <div className="container">
    <div className="section-title pt-5 pb-5">
      <h2>Career With Us</h2>
      <p>
        Join us and unlock a world of opportunities - let's connect and turn
        your dreams into reality.
      </p>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div
          className="career_with_dg"
          data-aos="fade-right"
          data-aos-offset={200}
        >
          <img
            src="digital-marketing-company/career-with-dg.webp"
            className="img-fluid img-thumbnail"
            alt="Performance Marketing Agency in india"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="connect-with-dg">
          <form
            className="contact-us-form-bg mr-15"
            action="./assets/formphp/careers.php"
            method="post"
            encType="multipart/form-data"
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
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="role-applying"
                  placeholder="Role Applying for"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12">
              <label>Drop your resume here</label>
              <div className="form-group pt-2">
                <input
                  className="form-control"
                  type="file"
                  name="attachment"
                  placeholder="Your resume"
                  required=""
                />
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
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
};
export default TestimonialCarrers;
